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
  /** Shown in the footer instead of "No. XX / 10" — for guests who can't make it this year. */
  statusLine?: string;
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
    title: 'Keeper of the Realm',
    rarity: 'Mythic',
    main: 'Boss Monster',
    align: 'Lawful Supportive (Chaotic When Provoked)',
    bio: 'Married the birthday knight and somehow still shows up every year. A saint with a mean poker face.',
    stats: [4, 3, 4, 5],
  },
  {
    slug: 'jennifer',
    name: 'Jennifer',
    title: 'The Sandbagger',
    rarity: 'Epic',
    main: 'Catan',
    align: 'Lawful Cunning',
    bio: "Jeanette's sister. Swears she forgot how Boss Monster works, then quietly demolishes the table before anyone catches on.",
    stats: [3, 4, 3, 3],
  },
  {
    slug: 'roy',
    name: 'Roy',
    title: 'The Unbothered Champion',
    rarity: 'Epic',
    main: 'Magic: The Gathering',
    align: 'Lawful Calculating',
    bio: "Bailey's little brother. Spots the winning move by turn two, then lets it go anyway — winning was never really the point.",
    stats: [5, 2, 2, 3],
  },
  {
    slug: 'artie',
    name: 'Artie',
    title: 'The Collector',
    rarity: 'Epic',
    main: 'The Oregon Trail',
    align: 'Chaotic Sneaky',
    bio: "Bailey's best friend. Introduced Bailey to Magic and never looked back — or sold a single card. If it can be collected, he's got three of it.",
    stats: [3, 4, 5, 4],
  },
  {
    slug: 'esther',
    name: 'Esther',
    title: 'Friend of the Table',
    rarity: 'Epic',
    main: 'Secret Hitler',
    align: 'Chaotic Good',
    bio: "Bailey's Best Friend. Doesn't care who wins, just that everyone's still at the table.",
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
    title: 'Rod. Just Rod.',
    rarity: 'Epic',
    main: 'Stripper Werewolves',
    align: 'Chaotic Good',
    bio: 'Rod. Rod rod, rod rod rod — rod? Rod! Rod, rod. Rod rod rod rod, rod.',
    stats: [5, 2, 3, 3],
  },
  {
    slug: 'em',
    name: 'Em',
    title: 'Freshly Summoned',
    rarity: 'Rare',
    main: 'Unknown',
    align: 'Neutral Curious',
    bio: "Bailey's cousin, first year in the party. Still learning which alliances are load-bearing.",
    stats: [2, 3, 2, 3],
  },
  {
    slug: 'jess',
    name: 'Jess',
    title: 'The Plus-One With a Plan',
    rarity: 'Rare',
    main: 'Unknown',
    align: 'Neutral',
    bio: "Em's girlfriend, also new to the tavern. Arrived with zero expectations and a suspiciously good trade instinct.",
    stats: [3, 3, 4, 3],
  },
  {
    slug: 'bryan',
    name: 'Bryan',
    title: 'The Rabbi',
    rarity: 'Rare',
    main: 'Secret Hitler',
    align: 'Chaotic Good',
    bio: "Currently occupied becoming a father, which even he'll admit outranks the campaign.",
    stats: [3, 3, 3, 3],
    statusLine: 'ABSENT — ON DAD DUTY',
  },
  {
    slug: 'theresa',
    name: 'Theresa',
    title: 'The Dungeon Mother',
    rarity: 'Rare',
    main: 'Plunder',
    align: 'Lawful Good',
    bio: "Runs the DnD table with a firm and fair hand, and never met a pirate she didn't love. Currently indisposed delivering the actual main quest.",
    stats: [3, 3, 3, 3],
    statusLine: 'ABSENT — DELIVERING THE FINAL BOSS',
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
