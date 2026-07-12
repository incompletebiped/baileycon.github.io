# BaileyCon — Third Annual

Site for BaileyCon, a private board-game convention at Knight Watch Games
(San Antonio, TX), doubling as Bailey's 40th birthday. Built with
[Astro](https://astro.build), deployed as a static site to GitHub Pages.

## Local development

```bash
npm install
cp .env.example .env   # fill in your Supabase credentials (see below)
npm run dev
```

Visit `http://localhost:4321`.

## Project structure

- `src/data/games.ts` — the games list (Games page + Home's Featured Quests).
  Add a game by adding an object to the array. Also defines the win-scoring
  formula (`winPoints`/`timeBucket`) shared by the Games and Wins pages.
- `src/data/guests.ts` — the 10 player trading cards (Players page + Home's avatar row).
- `src/components/` — shared UI: `Header`, `Footer`, `Crest` (the d20 "B" logo),
  `GameCard`, `GuestCard`, `PageBanner`, `StarRating`.
- `src/pages/` — the 6 site pages (`index`, `games`, `players`, `reviews`, `wall`, `wins`).
- `src/lib/supabase.ts` — Supabase client used by the Reviews, Wall, and Wins pages.

## Images

Drop image files into `public/images/` and they'll show automatically —
no code changes needed:

- Game box art: `public/images/games/<slug>.jpg` (slug is in `games.ts`, e.g. `catan.jpg`)
- Player portraits: `public/images/guests/<slug>.jpg` (slug is in `guests.ts`, e.g. `bailey.jpg`)

Until an image exists, the card shows a styled placeholder — nothing breaks.

## Supabase setup (Reviews + Wall + Wins — shared across all visitors)

The Reviews, Wall, and Wins pages need a small hosted database so posts are
visible to every visitor, not just the person who wrote them. This project
uses [Supabase](https://supabase.com) (free tier is plenty for this use case).

1. **Create a project**: go to https://supabase.com, sign up/log in, click
   "New Project". Pick any name/region/password (you won't need the DB
   password day-to-day).
2. **Create the tables**: once the project is ready, open the **SQL Editor**
   (left sidebar) → "New query", paste the SQL below, and click Run.

   ```sql
   create table reviews (
     id bigint generated always as identity primary key,
     game text not null,
     name text not null default 'A mysterious traveler',
     stars smallint not null check (stars between 1 and 5),
     body text not null check (char_length(body) between 1 and 1000),
     created_at timestamptz not null default now()
   );
   alter table reviews enable row level security;
   create policy "public read" on reviews for select using (true);
   create policy "public insert" on reviews for insert with check (
     char_length(name) <= 80 and char_length(game) <= 120
   );

   create table wall_posts (
     id bigint generated always as identity primary key,
     body text not null check (char_length(body) between 1 and 500),
     alias text not null,
     tint text not null,
     rotation numeric not null,
     created_at timestamptz not null default now()
   );
   alter table wall_posts enable row level security;
   create policy "public read" on wall_posts for select using (true);
   create policy "public insert" on wall_posts for insert with check (true);

   create table wall_reactions (
     id bigint generated always as identity primary key,
     post_id bigint not null references wall_posts(id) on delete cascade,
     emoji text not null check (emoji in ('heart','laugh','shock','dice')),
     created_at timestamptz not null default now()
   );
   alter table wall_reactions enable row level security;
   create policy "public read" on wall_reactions for select using (true);
   create policy "public insert" on wall_reactions for insert with check (true);

   create table wins (
     id bigint generated always as identity primary key,
     game text not null check (char_length(game) <= 120),
     player text not null check (char_length(player) <= 80),
     created_at timestamptz not null default now()
   );
   alter table wins enable row level security;
   create policy "public read" on wins for select using (true);
   create policy "public insert" on wins for insert with check (true);
   ```

   Note: `emoji` stores a plain ASCII key (`heart`/`laugh`/`shock`/`dice`), not
   the emoji glyph itself — pasting literal emoji into a `check` constraint is
   fragile (different tools can save different Unicode code points for what
   looks like the same character, e.g. with or without a variation selector),
   which silently breaks every insert with a constraint-violation error. The
   actual emoji only lives in the button's display text in `wall.astro`.

3. **Get your API credentials**: Project Settings (gear icon) → API. Copy:
   - **Project URL** → `PUBLIC_SUPABASE_URL`
   - **`anon` `public` key** → `PUBLIC_SUPABASE_ANON_KEY`

   (The anon key is meant to be public/client-side — it's safe to ship in the
   built site. Access control comes from the Row Level Security policies
   above, which only allow public insert + select, never update/delete.)

4. **Local dev**: put both values in a `.env` file at the repo root (already
   gitignored):

   ```
   PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
   PUBLIC_SUPABASE_ANON_KEY=eyJ...
   ```

5. **GitHub Pages deploy**: add the same two values as **Actions secrets** so
   the deployed build has them baked in: repo → Settings → Secrets and
   variables → Actions → "New repository secret" for each of
   `PUBLIC_SUPABASE_URL` and `PUBLIC_SUPABASE_ANON_KEY`.

Until these are configured, the Reviews, Wall, and Wins pages will build and
render fine — they'll just show a "backend is not configured yet" message
instead of a list.

## Deploying to GitHub Pages

Once pushed to `main` it deploys via `.github/workflows/deploy.yml` to the
custom domain `https://baileycon.com` (see `public/CNAME`).

One-time manual steps (can't be done from the CLI):
- In the GitHub repo → **Settings → Pages → Source**, select **"GitHub Actions"**.
- In **Settings → Pages → Custom domain**, confirm it shows `baileycon.com`
  and that DNS is pointed at GitHub Pages per
  [their docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

After that, every push to `main` builds and deploys automatically. The
`public/CNAME` file must keep shipping with every build — GitHub Pages
Actions deployments serve exactly what's in the `dist` artifact, so without
it the custom domain setting gets dropped on the next deploy.

## Switching to Vercel later

No code changes needed — import the repo in Vercel (it auto-detects Astro),
add the same `PUBLIC_SUPABASE_URL` / `PUBLIC_SUPABASE_ANON_KEY` environment
variables in the Vercel project settings, and deploy.
