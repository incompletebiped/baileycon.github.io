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
    main: 'Boss Monster',
    align: 'Lawful Supportive (Chaotic When Provoked)',
    bio: 'Married the birthday knight and somehow still shows up every year. A saint with a mean poker face.',
    stats: [4, 3, 4, 5],
  },
  {
    slug: 'jennifer',
    name: 'Jennifer',
    title: 'The Wildcard In-Law',
    rarity: 'Epic',
    main: 'Catan',
    align: 'Lawful Cunning',
    bio: "Jeanette's sister, and a menace disguised as forgetful. Swears she can't remember how Boss Monster works, then quietly demolishes the table before anyone catches on.",
    stats: [3, 4, 3, 3],
  },
  {
    slug: 'roy',
    name: 'Roy',
    title: 'The Little Brother, Quietly Unbeatable',
    rarity: 'Epic',
    main: 'Magic: The Gathering',
    align: 'Lawful Calculating',
    bio: "Bailey's little brother, and the best player at the table who couldn't care less. Usually knows the winning move by turn two — and just as often lets it go, because winning was never really the point.",
    stats: [5, 2, 2, 3],
  },
  {
    slug: 'artie',
    name: 'Artie',
    title: 'The Trailblazer',
    rarity: 'Epic',
    main: 'The Oregon Trail',
    align: 'Chaotic Sneaky',
    bio: "Bailey's best friend, a strategist who — unlike Roy — very much wants to win. Optimizes the wagon, rations the oxen, and will let your family die of dysentery if it improves his odds.",
    stats: [3, 4, 5, 4],
  },
  {
    slug: 'esther',
    name: 'Esther',
    title: 'The Kingmaker',
    rarity: 'Epic',
    main: 'Secret Hitler',
    align: 'Chaotic Good',
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
    main: 'Stripper Werewolves',
    align: 'Chaotic Good',
    bio: 'Rod. Rod rod, rod rod rod — rod? Rod! Rod, rod. Rod rod rod rod, rod.',
    stats: [5, 2, 3, 3],
  },
  {
    slug: 'em',
    name: 'Em',
    title: 'The Rookie',
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
