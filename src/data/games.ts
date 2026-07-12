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
  /** True if the party has never actually played this one yet. */
  neverPlayed?: boolean;
  /** Manual override for the computed win-value points, for games whose real
   *  runtime (e.g. scales heavily with player count) isn't captured well by
   *  weight × time-bucket off the listed (minimum) time. */
  winPointsOverride?: number;
}

// To add a game later: add another object here. Everything else (pips, weight
// label, hall color, box-art lookup) derives automatically.
export const games: Game[] = [
  {
    slug: 'catan',
    name: 'Catan',
    tag: 'Trade sheep, hoard brick, and betray friends over a single road. Now fits six.',
    players: '3–6',
    time: '60–120 min',
    weight: 2,
    hall: 'Renaissance',
  },
  {
    slug: 'secret-hitler',
    name: 'Secret Hitler',
    tag: 'Liberals vs. fascists. Lie boldly to everyone you love.',
    players: '5–10',
    time: '30–45 min',
    weight: 1,
    hall: 'Dark Ages',
  },
  {
    slug: 'paleo-vet',
    name: 'PaleoVet',
    tag: 'Dinosaur triage under pressure — good luck getting a stegosaurus to hold still.',
    players: '1–4',
    time: '30–60 min',
    weight: 1,
    hall: 'Dark Ages',
  },
  {
    slug: 'boss-monster',
    name: 'Boss Monster',
    tag: 'Build an 8-bit dungeon, lure in heroes, and feast upon their souls. Now fits six.',
    players: '2–6',
    time: '20–60 min',
    weight: 2,
    hall: 'Dark Ages',
    winPointsOverride: 6,
  },
  {
    slug: 'super-boss-monster',
    name: 'Super Boss Monster',
    tag: 'Same dungeon-building chaos, now with a town worth squabbling over first.',
    players: '1–4',
    time: '30–60 min',
    weight: 2,
    hall: 'Dark Ages',
    winPointsOverride: 6,
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
    slug: 'clank-catacombs',
    name: 'Clank! Catacombs',
    tag: 'Sneak past a sleeping dragon, grab the loot, try not to be the loud one. Now fits six.',
    players: '2–6',
    time: '45–90 min',
    weight: 2,
    hall: 'Renaissance',
  },
  {
    slug: 'magic-the-gathering',
    name: 'Magic: The Gathering',
    tag: 'Tap lands, cast spells, ruin friendships — thirty years of rules-lawyering and counting.',
    players: '2–4',
    time: '20+ min',
    weight: 3,
    hall: 'Renaissance',
    winPointsOverride: 6,
  },
  {
    slug: 'thats-not-a-hat',
    name: "That's Not a Hat!",
    tag: "Remember what's in your pile, or lie about it with total confidence.",
    players: '3–8',
    time: '15 min',
    weight: 1,
    hall: 'Dark Ages',
  },
  {
    slug: 'taco-cat-goat-cheese-pizza',
    name: 'Taco Cat Goat Cheese Pizza',
    tag: 'Say the words, slap the pile, lose a layer of skin off your knuckles.',
    players: '2–8',
    time: '10–30 min',
    weight: 1,
    hall: 'Dark Ages',
  },
  {
    slug: 'coraline-beware-the-other-mother',
    name: 'Coraline: Beware the Other Mother',
    tag: 'Sneak past button-eyed horrors to save Coraline — together, for once.',
    players: '1–4',
    time: '30–60 min',
    weight: 1,
    hall: 'Dark Ages',
    neverPlayed: true,
  },
  {
    slug: 'king-of-tokyo',
    name: 'King of Tokyo',
    tag: "Giant monsters, big dice, zero subtlety. Somebody's getting smashed.",
    players: '2–6',
    time: '30 min',
    weight: 1,
    hall: 'Dark Ages',
  },
  {
    slug: 'pirates-of-the-high-teas',
    name: 'Pirates of the High Teas',
    tag: 'Worker-place your way to the most deranged tea combination imaginable.',
    players: '1–4',
    time: '45 min',
    weight: 2,
    hall: 'Renaissance',
  },
  {
    slug: 'tea-witches',
    name: 'Tea Witches',
    tag: 'Brew for fickle customers before a hex ruins your whole shift.',
    players: '2–4',
    time: '60–120 min',
    weight: 3,
    hall: 'Renaissance',
  },
  {
    slug: 'side-effects',
    name: 'Side Effects',
    tag: 'Cure your own ailments by dumping the side effects on somebody else.',
    players: '2–8',
    time: '10–30 min',
    weight: 1,
    hall: 'Dark Ages',
  },
  {
    slug: 'hex-effects',
    name: 'Hex Effects',
    tag: 'Same curse-dumping chaos as Side Effects, now in clumsy-alchemist flavor.',
    players: '2–8',
    time: '10–30 min',
    weight: 1,
    hall: 'Dark Ages',
  },
  {
    slug: 'comic-hunters',
    name: 'Comic Hunters',
    tag: 'Hit the shops, chase first appearances, out-collect the whole table.',
    players: '1–4',
    time: '45–60 min',
    weight: 2,
    hall: 'Renaissance',
    neverPlayed: true,
  },
  {
    slug: 'gnome-hollow',
    name: 'Gnome Hollow',
    tag: "Grow mushroom rings, harvest the bounty, argue about who's cozier.",
    players: '2–4',
    time: '45–60 min',
    weight: 2,
    hall: 'Renaissance',
    neverPlayed: true,
  },
  {
    slug: 'chemical-overload',
    name: 'Chemical Overload',
    tag: 'Brew increasingly unstable potions on your way to Master Alchemist.',
    players: '1–4',
    time: '45–75 min',
    weight: 2,
    hall: 'Renaissance',
    neverPlayed: true,
  },
  {
    slug: 'plunder',
    name: "Plunder: A Pirate's Life",
    tag: 'Build a fleet, raid rival captains, and outrun the storm to the biggest haul.',
    players: '2–6',
    time: '40–120 min',
    weight: 2,
    hall: 'Renaissance',
    winPointsOverride: 6,
  },
  {
    slug: 'marrying-mr-darcy',
    name: 'Marrying Mr. Darcy',
    tag: 'Attend the right Events, land the best Suitor, out-cunning every rival heroine.',
    players: '2–6',
    time: '30–60 min',
    weight: 1,
    hall: 'Renaissance',
    neverPlayed: true,
  },
  {
    slug: 'heroes-and-wizards',
    name: 'Heroes & Wizards',
    tag: 'Recruit a legendary party — or just steal somebody else’s.',
    players: '2–5',
    time: '15–45 min',
    weight: 1,
    hall: 'Dark Ages',
    winPointsOverride: 2,
  },
  {
    slug: 'tiny-tinas-robot-tea-party',
    name: "Tiny Tina's Robot Tea Party",
    tag: 'Build the best Claptrap, one stolen part at a time.',
    players: '2–5',
    time: '15 min',
    weight: 1,
    hall: 'Dark Ages',
    neverPlayed: true,
  },
  {
    slug: 'the-yawning-portal',
    name: 'The Yawning Portal',
    tag: 'Serve hungry adventurers exactly what they ordered, goblins included.',
    players: '1–4',
    time: '30–60 min',
    weight: 2,
    hall: 'Renaissance',
    neverPlayed: true,
  },
  {
    slug: 'tavern-masters',
    name: 'Tavern Masters',
    tag: 'Run the tavern, stock the bar, race the table to 20 gold.',
    players: '1–6',
    time: '30–45 min',
    weight: 2,
    hall: 'Renaissance',
    neverPlayed: true,
  },
  {
    slug: 'dont-get-stabbed',
    name: "Don't Get Stabbed!",
    tag: "Someone's the killer. Everyone else is just hoping not to draw wrong.",
    players: '3–5',
    time: '15–30 min',
    weight: 1,
    hall: 'Dark Ages',
    neverPlayed: true,
  },
  {
    slug: 'overboss',
    name: 'Overboss',
    tag: 'Same villain dungeon energy, now a tighter tile-laying puzzle.',
    players: '1–5',
    time: '20–45 min',
    weight: 1,
    hall: 'Dark Ages',
    neverPlayed: true,
  },
  {
    slug: 'endearment',
    name: 'Endearment',
    tag: "Regency England, but it's secretly Tinder — court wisely.",
    players: '1–4',
    time: '60–90 min',
    weight: 2,
    hall: 'Renaissance',
    neverPlayed: true,
  },
  {
    slug: 'stalk-exchange',
    name: 'Stalk Exchange',
    tag: "Bluff the market — except the stocks are flowers and everyone's lying.",
    players: '2–5',
    time: '30–45 min',
    weight: 1,
    hall: 'Dark Ages',
    neverPlayed: true,
  },
  {
    slug: 'night-of-the-ninja',
    name: 'Night of the Ninja',
    tag: 'Spy, assassinate, and unmask the rival house — five minutes a round.',
    players: '4–11',
    time: '15–30 min',
    weight: 1,
    hall: 'Dark Ages',
    neverPlayed: true,
  },
  {
    slug: 'the-office-paper-paranoia',
    name: 'The Office: Paper Paranoia',
    tag: "Save Dunder Mifflin from a hostile takeover — unless you're the mole.",
    players: '4–8',
    time: '30–45 min',
    weight: 2,
    hall: 'Dark Ages',
    neverPlayed: true,
  },
  {
    slug: 'everdell',
    name: 'Everdell',
    tag: "Beavers run sawmills, squirrels cook dinner, and somebody wins by autumn.",
    players: '1–4',
    time: '40–80 min',
    weight: 2,
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

/** Parses "3–6" / "2+" / "5" into a numeric range for sorting & filtering. NO_MAX stands in for "+". */
const NO_MAX = 99;

export function parsePlayers(players: string): { min: number; max: number } {
  const plus = players.match(/^(\d+)\+$/);
  if (plus) return { min: Number(plus[1]), max: NO_MAX };
  const range = players.match(/^(\d+)\D+(\d+)$/);
  if (range) return { min: Number(range[1]), max: Number(range[2]) };
  const single = players.match(/^(\d+)$/);
  if (single) return { min: Number(single[1]), max: Number(single[1]) };
  return { min: 1, max: NO_MAX };
}

/** Parses "60–120 min" / "20+ min" / "15 min" into a numeric minute range. */
export function parseTime(time: string): { min: number; max: number } {
  const cleaned = time.replace(/\s*min$/i, '').trim();
  const plus = cleaned.match(/^(\d+)\+$/);
  if (plus) return { min: Number(plus[1]), max: NO_MAX * 10 };
  const range = cleaned.match(/^(\d+)\D+(\d+)$/);
  if (range) return { min: Number(range[1]), max: Number(range[2]) };
  const single = cleaned.match(/^(\d+)$/);
  if (single) return { min: Number(single[1]), max: Number(single[1]) };
  return { min: 0, max: NO_MAX * 10 };
}

/** Maps a minimum-minutes figure to a scoring bucket: <30→1, 30-60→2, 60-120→3, 120+→4. */
export function timeBucket(minutes: number): 1 | 2 | 3 | 4 {
  if (minutes < 30) return 1;
  if (minutes < 60) return 2;
  if (minutes < 120) return 3;
  return 4;
}

/** Win-value formula: weight × timeBucket(min time). Single source of truth for the
 *  GameCard "WIN VALUE" stat, the Wins leaderboard, and guest score totals. */
export function winPoints(game: Pick<Game, 'weight' | 'time' | 'winPointsOverride'>): number {
  if (game.winPointsOverride !== undefined) return game.winPointsOverride;
  const { min } = parseTime(game.time);
  return game.weight * timeBucket(min);
}

export function withDisplay(game: Game) {
  const playerRange = parsePlayers(game.players);
  const timeRange = parseTime(game.time);
  return {
    ...game,
    pips: pips(game.weight),
    weightLabel: weightLabel(game.weight),
    hallColor: hallColor(game.hall),
    playersMin: playerRange.min,
    playersMax: playerRange.max,
    timeMin: timeRange.min,
    timeMax: timeRange.max,
    winPoints: winPoints(game),
  };
}
