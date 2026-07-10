export type Rarity = 'Mythic' | 'Epic' | 'Rare';

export interface GuestStat {
  label: string;
  value: number; // 1-5
}

export interface Guest {
  slug: string;
  name: string;
  title: string;
  rarity: Rarity;
  main: string;
  align: string;
  bio: string;
  /** STRATEGY, CHAOS, BLUFF, STAMINA — 1-5 each */
  stats: [number, number, number, number];
}

// Edit names, titles, bios, stats, or rarity here any time. Add a `slug` +
// matching `public/images/guests/<slug>.jpg` to give someone a real portrait.
export const guests: Guest[] = [
  {
    slug: 'bailey',
    name: 'Bailey',
    title: 'The Birthday Knight',
    rarity: 'Mythic',
    main: 'All of them',
    align: 'Chaotic Festive',
    bio: 'Turns forty mid-quest and still insists on finishing the campaign.',
    stats: [5, 5, 4, 5],
  },
  {
    slug: 'jeanette',
    name: 'Jeanette',
    title: "Keeper of the Realm (and Bailey's Patience)",
    rarity: 'Mythic',
    main: 'Wingspan',
    align: 'Lawful Supportive (Chaotic When Provoked)',
    bio: 'Married the birthday knight and somehow still shows up every year. A saint with a mean poker face.',
    stats: [4, 3, 4, 5],
  },
  {
    slug: 'jennifer',
    name: 'Jennifer',
    title: 'The Wildcard In-Law',
    rarity: 'Epic',
    main: 'Codenames',
    align: 'Chaotic Good',
    bio: "Jeanette's sister, and proof that in-laws can absolutely be trusted with your secret identity. Mostly.",
    stats: [3, 4, 3, 3],
  },
  {
    slug: 'roy',
    name: 'Roy',
    title: 'The Elder Brother, Self-Appointed Rules Master',
    rarity: 'Epic',
    main: 'Terraforming Mars',
    align: 'Lawful Stubborn',
    bio: "Bailey's brother. Has never once let a rules dispute go unlitigated.",
    stats: [5, 2, 2, 3],
  },
  {
    slug: 'artie',
    name: 'Artie',
    title: 'The Bluff Master',
    rarity: 'Epic',
    main: 'Coup',
    align: 'Chaotic Sneaky',
    bio: "Bailey's best friend. Smiles warmly while lying to your face. You will never see it coming.",
    stats: [3, 4, 5, 4],
  },
  {
    slug: 'esther',
    name: 'Esther',
    title: 'The Kingmaker',
    rarity: 'Epic',
    main: 'Secret Hitler',
    align: 'Lawful Cunning',
    bio: "Bailey's best friend. Rarely wins outright, but decides who does. Fear her quiet nods.",
    stats: [4, 3, 5, 4],
  },
  {
    slug: 'jessie',
    name: 'Jessie',
    title: 'The Chaos Goblin',
    rarity: 'Epic',
    main: 'Betrayal at House on the Hill',
    align: 'Chaotic Neutral',
    bio: 'Flips the board metaphorically, and once, allegedly, literally. We keep inviting her.',
    stats: [2, 5, 4, 4],
  },
  {
    slug: 'tommy',
    name: 'Tommy',
    title: 'The Strategist',
    rarity: 'Epic',
    main: 'Paleo',
    align: 'Lawful Calculating',
    bio: 'Three turns ahead at all times. Already won; just being polite about it.',
    stats: [5, 2, 3, 3],
  },
  {
    slug: 'em',
    name: 'Em',
    title: 'The Rookie',
    rarity: 'Rare',
    main: 'Boss Monster',
    align: 'Neutral Curious',
    bio: "Bailey's cousin, first year in the fellowship. Still learning which alliances are load-bearing.",
    stats: [2, 3, 2, 3],
  },
  {
    slug: 'jess',
    name: 'Jess',
    title: 'The Plus-One With a Plan',
    rarity: 'Rare',
    main: 'Catan',
    align: 'Chaotic Good',
    bio: "Em's girlfriend, also new to the tavern. Arrived with zero expectations and a suspiciously good trade instinct.",
    stats: [3, 3, 4, 3],
  },
];

export function guestStats(guest: Guest): GuestStat[] {
  const labels = ['STRATEGY', 'CHAOS', 'BLUFF', 'STAMINA'];
  return guest.stats.map((value, i) => ({ label: labels[i], value }));
}

export function guestNum(index: number): string {
  const n = index + 1;
  return (n < 10 ? '0' : '') + n;
}

export const rarityColorVar: Record<Rarity, string> = {
  Mythic: 'var(--bc-mythic)',
  Epic: 'var(--bc-epic)',
  Rare: 'var(--bc-rare)',
};
