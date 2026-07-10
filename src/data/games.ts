export type Hall = 'Renaissance' | 'Dark Ages';

export interface Game {
  slug: string;
  name: string;
  tag: string;
  players: string;
  time: string;
  /** 1 = Light, 2 = Medium, 3 = Heavy */
  weight: 1 | 2 | 3;
  hall: Hall;
}

// To add a game later: add another object here. Everything else (pips, weight
// label, hall color, box-art lookup) derives automatically.
export const games: Game[] = [
  {
    slug: 'catan',
    name: 'Catan',
    tag: 'Trade sheep, hoard brick, and betray friends over a single road.',
    players: '3–4',
    time: '75 min',
    weight: 2,
    hall: 'Renaissance',
  },
  {
    slug: 'secret-hitler',
    name: 'Secret Hitler',
    tag: 'Liberals vs. fascists. Lie boldly to everyone you love.',
    players: '5–10',
    time: '45 min',
    weight: 1,
    hall: 'Dark Ages',
  },
  {
    slug: 'paleo',
    name: 'Paleo',
    tag: 'Co-op stone-age survival. The mammoth is decidedly not your friend.',
    players: '2–4',
    time: '60 min',
    weight: 2,
    hall: 'Renaissance',
  },
  {
    slug: 'boss-monster',
    name: 'Boss Monster',
    tag: 'Build an 8-bit dungeon, lure in heroes, feast upon their souls.',
    players: '2–4',
    time: '25 min',
    weight: 1,
    hall: 'Dark Ages',
  },
  {
    slug: 'wingspan',
    name: 'Wingspan',
    tag: 'Build a gorgeous engine of birds. Weirdly relaxing, secretly cutthroat.',
    players: '1–5',
    time: '60 min',
    weight: 2,
    hall: 'Renaissance',
  },
  {
    slug: 'coup',
    name: 'Coup',
    tag: 'Bluff, bribe, and assassinate your way to the last one standing.',
    players: '2–6',
    time: '15 min',
    weight: 1,
    hall: 'Dark Ages',
  },
  {
    slug: 'codenames',
    name: 'Codenames',
    tag: 'One-word clues, secret agents, and agonizing over-thinking.',
    players: '4–8+',
    time: '20 min',
    weight: 1,
    hall: 'Dark Ages',
  },
  {
    slug: 'betrayal-at-house-on-the-hill',
    name: 'Betrayal at House on the Hill',
    tag: 'Explore a haunted manor until a friend inevitably turns traitor.',
    players: '3–6',
    time: '90 min',
    weight: 2,
    hall: 'Renaissance',
  },
  {
    slug: 'terraforming-mars',
    name: 'Terraforming Mars',
    tag: 'Turn a red rock green over three glorious, brain-melting hours.',
    players: '1–5',
    time: '150 min',
    weight: 3,
    hall: 'Renaissance',
  },
];

export function pips(weight: number): string {
  return '◆'.repeat(weight) + '◇'.repeat(3 - weight);
}

export function weightLabel(weight: number): string {
  return weight === 1 ? 'Light' : weight === 2 ? 'Medium' : 'Heavy';
}

export function hallColor(hall: Hall): string {
  return hall === 'Renaissance' ? 'var(--bc-blue-light)' : 'var(--bc-violet-light)';
}

export function withDisplay(game: Game) {
  return {
    ...game,
    pips: pips(game.weight),
    weightLabel: weightLabel(game.weight),
    hallColor: hallColor(game.hall),
  };
}
