export type Rarity = 'Mythic' | 'Epic' | 'Rare';
export type GuestStatus = 'Expansion Pending' | 'Region Locked';

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
  /** Absent this year — shown as a rotated ribbon banner across the card art. */
  status?: GuestStatus;
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
    align: 'Neutral Good',
    bio: 'Turns forty mid-quest and still insists on finishing the campaign.',
    stats: [5, 5, 4, 5],
  },
  {
    slug: 'jeanette',
    name: 'Jeanette',
    title: 'Keeper of the Realm',
    rarity: 'Mythic',
    main: 'Boss Monster',
    align: 'Chaotic Neutral',
    bio: 'Married the birthday knight and somehow still shows up every year.',
    stats: [4, 3, 4, 5],
  },
  {
    slug: 'jennifer',
    name: 'Jennifer',
    title: 'The Sandbagger',
    rarity: 'Epic',
    main: 'Catan',
    align: 'Lawful Neutral',
    bio: "Jeanette's sister. Says she forgets the rules, then quietly demolishes the table.",
    stats: [3, 4, 3, 3],
  },
  {
    slug: 'roy',
    name: 'Roy',
    title: 'The Unbothered Champion',
    rarity: 'Epic',
    main: 'Magic: The Gathering',
    align: 'True Neutral',
    bio: "Bailey's little brother. Spots the winning moves, but keeps the game going.",
    stats: [5, 2, 2, 3],
  },
  {
    slug: 'artie',
    name: 'Artie',
    title: 'The Collector',
    rarity: 'Epic',
    main: 'The Oregon Trail',
    align: 'Chaotic Good',
    bio: "Bailey's Best Friend. If it can be collected, he's got three of it.",
    stats: [3, 4, 5, 4],
  },
  {
    slug: 'esther',
    name: 'Esther',
    title: 'Friend of the Table',
    rarity: 'Epic',
    main: 'Clank!',
    align: 'Lawful Good',
    bio: "Bailey's Best Friend. Doesn't care who wins, just that everyone's still at the table.",
    stats: [4, 3, 5, 4],
  },
  {
    slug: 'jessie',
    name: 'Jessie',
    title: 'The Chaos Goblin',
    rarity: 'Epic',
    main: 'Side Effects',
    align: 'Chaotic Neutral',
    bio: 'Flips the board metaphorically, and once, allegedly, literally. We keep inviting her.',
    stats: [2, 5, 4, 4],
  },
  {
    slug: 'tommy',
    name: 'Tommy',
    title: 'The Assassin',
    rarity: 'Epic',
    main: 'Stripper Werewolves',
    align: 'Chaotic Neutral',
    bio: 'Rod. Rod rod, rod rod rod — rod? Rod! Rod, rod. Rod rod rod rod, rod.',
    stats: [5, 2, 3, 3],
  },
  {
    slug: 'em',
    name: 'Em',
    title: 'Freshly Summoned',
    rarity: 'Rare',
    main: 'Unknown',
    align: 'Neutral',
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
    bio: "Em's girlfriend. Arrives with zero expectations, and is wholly unprepared.",
    stats: [3, 3, 4, 3],
  },
  {
    slug: 'bryan',
    name: 'Bryan',
    title: 'The Rabbi',
    rarity: 'Rare',
    main: 'Secret Hitler',
    align: 'Chaotic Good',
    bio: 'Occupied becoming a father, which everyone agrees outranks the campaign.',
    stats: [3, 3, 3, 3],
    status: 'Expansion Pending',
  },
  {
    slug: 'theresa',
    name: 'Theresa',
    title: 'The Dungeon Mother',
    rarity: 'Rare',
    main: 'Plunder',
    align: 'Lawful Good',
    bio: 'Runs the DnD table with a firm and fair hand. Indisposed delivering the actual main quest.',
    stats: [3, 3, 3, 3],
    status: 'Expansion Pending',
  },
  {
    slug: 'seth',
    name: 'Seth',
    title: 'The A.I. Construct',
    rarity: 'Rare',
    main: 'Magic: The Gathering',
    align: 'Chaotic Evil',
    bio: 'Calculates every possible line of play, then picks the pettiest one on purpose.',
    stats: [3, 3, 3, 3],
    status: 'Region Locked',
  },
  {
    slug: 'don',
    name: 'Don',
    title: 'Father of Chaos',
    rarity: 'Rare',
    main: 'Heroes & Wizards',
    align: 'Chaotic Neutral',
    bio: 'Where he sits, order goes to die — but he always brings the good snacks.',
    stats: [3, 3, 3, 3],
    status: 'Region Locked',
  },
  {
    slug: 'abby',
    name: 'Abby',
    title: 'The Daughter of Chaos',
    rarity: 'Rare',
    main: 'Monster Rooms',
    align: 'Chaotic Evil',
    bio: 'Learned chaos at the source and somehow out-scaled the teacher.',
    stats: [3, 3, 3, 3],
    status: 'Region Locked',
  },
  {
    slug: 'mercedes',
    name: 'Mercedes',
    title: 'The Chaos Queen',
    rarity: 'Rare',
    main: 'Pictionary',
    align: 'Chaotic Neutral',
    bio: 'Rules the table by force of will and an utterly unreadable face.',
    stats: [3, 3, 3, 3],
    status: 'Region Locked',
  },
];

/** The players competing for the Wins podium this year (locked/pending guests sit it out). */
export const activeGuests = guests.filter((g) => !g.status);

export function guestStats(guest: Guest): GuestStat[] {
  const labels = ['STRATEGY', 'CHAOS', 'BLUFF', 'STAMINA'];
  return guest.stats.map((value, i) => ({ label: labels[i], value }));
}

/** Renders an n-of-5 diamond pip scale as { filled, empty } glyph strings. */
export function pips(n: number): { filled: string; empty: string } {
  const clamped = Math.max(1, Math.min(5, n));
  return { filled: '◆'.repeat(clamped), empty: '◇'.repeat(5 - clamped) };
}

export interface RarityStyle {
  rarityColor: string;
  rarityBorder: string;
  rarityGlow: string;
  raritySymbol: string;
  frameGrad: string;
  titleBg: string;
  titleColor: string;
  ptBorder: string;
}

/** Card-frame styling per rarity tier — colors/gradients verbatim from the design's `rs()`. */
export const rarityStyles: Record<Rarity, RarityStyle> = {
  Mythic: {
    rarityColor: '#ffcf5c',
    rarityBorder: 'rgba(255,207,92,0.5)',
    rarityGlow: 'rgba(255,207,92,0.55)',
    raritySymbol: '★',
    frameGrad: 'linear-gradient(160deg,#c9a227 0%,#7a4e0a 22%,#f0d060 45%,#7a4e0a 68%,#c9a227 100%)',
    titleBg: '#4a2c06',
    titleColor: '#ffe87a',
    ptBorder: '#c9a227',
  },
  Epic: {
    rarityColor: '#4da3ff',
    rarityBorder: 'rgba(77,163,255,0.45)',
    rarityGlow: 'rgba(77,163,255,0.5)',
    raritySymbol: '✦',
    frameGrad: 'linear-gradient(160deg,#1a5c9c 0%,#0a2a4a 22%,#2a9adc 45%,#0a2a4a 68%,#1a5c9c 100%)',
    titleBg: '#061a2e',
    titleColor: '#7ac8f8',
    ptBorder: '#3a88cc',
  },
  Rare: {
    rarityColor: '#c0d4e8',
    rarityBorder: 'rgba(192,212,232,0.35)',
    rarityGlow: 'rgba(192,212,232,0.3)',
    raritySymbol: '◆',
    frameGrad: 'linear-gradient(160deg,#6a7a8a 0%,#384858 22%,#9ab8cc 45%,#384858 68%,#6a7a8a 100%)',
    titleBg: '#1e2e3e',
    titleColor: '#c8dce8',
    ptBorder: '#7a9ab8',
  },
};

/** Ribbon banner colors for locked/pending guests. */
export const statusStyles: Record<GuestStatus, { bg: string; color: string }> = {
  'Expansion Pending': { bg: '#ffcf5c', color: '#1a0e02' },
  'Region Locked': { bg: '#e0483a', color: '#ffffff' },
};
