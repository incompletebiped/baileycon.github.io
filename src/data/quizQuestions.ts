export type StatKey = 'str' | 'chs' | 'blf' | 'sta';

export interface QuizOption {
  label: string;
  s: Partial<Record<StatKey, number>>;
}

export interface QuizQuestion {
  prompt: string;
  options: QuizOption[];
}

// The pool of 12 — each attempt shuffles and draws 5, so retakes vary.
export const questionPool: QuizQuestion[] = [
  {
    prompt: 'The tavern door swings open before your quest. How do you enter?',
    options: [
      { label: 'Scan the room for exits, marks, and the fastest table to beat.', s: { str: 2, blf: 1 } },
      { label: 'Kick it open and announce yourself to the whole hall.', s: { chs: 2, sta: 1 } },
      { label: 'Slip in unseen and order quietly in the corner.', s: { blf: 2, str: 1 } },
      { label: 'Head straight for the bar — you plan to close it down.', s: { sta: 2, chs: 1 } },
    ],
  },
  {
    prompt: 'A locked chest blocks the path. Your move?',
    options: [
      { label: 'Study the mechanism; every lock yields to logic.', s: { str: 2, blf: 1 } },
      { label: 'Smash it open. Loudly. Immediately.', s: { chs: 2, sta: 1 } },
      { label: 'Convince the party it is cursed, then take it later.', s: { blf: 2, chs: 1 } },
      { label: "Carry it home and open it at next year's con.", s: { sta: 2, str: 1 } },
    ],
  },
  {
    prompt: 'A dragon offers you a deal. You…',
    options: [
      { label: 'Calculate the odds and counter with a better offer.', s: { str: 2, blf: 1 } },
      { label: 'Flip the table on principle.', s: { chs: 2, sta: 1 } },
      { label: 'Lie so beautifully the dragon apologizes to you.', s: { blf: 2, str: 1 } },
      { label: 'Wait it out — dragons get bored before you do.', s: { sta: 2, chs: 1 } },
    ],
  },
  {
    prompt: 'Your party is losing badly. What carries you through?',
    options: [
      { label: 'A plan you laid three moves ago.', s: { str: 2, sta: 1 } },
      { label: 'Beautiful, unpredictable mayhem.', s: { chs: 2, blf: 1 } },
      { label: 'A bluff nobody at the table sees coming.', s: { blf: 2, str: 1 } },
      { label: 'A sheer, stubborn refusal to quit.', s: { sta: 2, chs: 1 } },
    ],
  },
  {
    prompt: 'At the victory feast, you are the one who…',
    options: [
      { label: 'Explains, in detail, exactly how you won.', s: { str: 2, blf: 1 } },
      { label: 'Started the food fight.', s: { chs: 2, sta: 1 } },
      { label: 'Claimed a win nobody can quite disprove.', s: { blf: 2, chs: 1 } },
      { label: 'Is still going strong at midnight.', s: { sta: 2, str: 1 } },
    ],
  },
  {
    prompt: 'The party must choose a leader for the dungeon. You…',
    options: [
      { label: 'Present a clear route and delegate the roles.', s: { str: 2, sta: 1 } },
      { label: 'Nominate yourself with a rousing, chaotic speech.', s: { chs: 2, blf: 1 } },
      { label: 'Talk someone else into it, then quietly steer them.', s: { blf: 2, str: 1 } },
      { label: "Volunteer to just carry everyone's gear all day.", s: { sta: 2, chs: 1 } },
    ],
  },
  {
    prompt: 'A rival challenges you to a duel of your choosing. You pick…',
    options: [
      { label: 'Chess. Obviously. You already know the ending.', s: { str: 2, blf: 1 } },
      { label: 'A dice game with rules you invent as you go.', s: { chs: 2, sta: 1 } },
      { label: 'Poker — your face gives away nothing.', s: { blf: 2, chs: 1 } },
      { label: 'An endurance contest; last one awake wins.', s: { sta: 2, str: 1 } },
    ],
  },
  {
    prompt: 'You find a mysterious potion on the shelf. Do you…',
    options: [
      { label: 'Identify the ingredients before touching it.', s: { str: 2, sta: 1 } },
      { label: 'Drink it immediately to see what happens.', s: { chs: 2, blf: 1 } },
      { label: 'Swap the label and gift it to your rival.', s: { blf: 2, chs: 1 } },
      { label: 'Pocket it for a rainy day three sessions from now.', s: { sta: 2, str: 1 } },
    ],
  },
  {
    prompt: 'The bard demands a tale of your greatest deed. You tell them…',
    options: [
      { label: 'The precise, well-documented account.', s: { str: 2, sta: 1 } },
      { label: 'A wildly escalating version with dragons added.', s: { chs: 2, blf: 1 } },
      { label: 'Whatever makes you sound most heroic.', s: { blf: 2, str: 1 } },
      { label: 'The long version. All of it. Every hour of it.', s: { sta: 2, chs: 1 } },
    ],
  },
  {
    prompt: 'Camp is attacked at midnight. Your first instinct?',
    options: [
      { label: 'Rally formation — you had a contingency for this.', s: { str: 2, blf: 1 } },
      { label: 'Charge into the dark screaming.', s: { chs: 2, sta: 1 } },
      { label: "Convince the raiders they've got the wrong camp.", s: { blf: 2, str: 1 } },
      { label: 'Hold the line until dawn, no matter what.', s: { sta: 2, chs: 1 } },
    ],
  },
  {
    prompt: 'The map has a blank, unmarked region. You…',
    options: [
      { label: 'Cross-reference three other maps to deduce it.', s: { str: 2, blf: 1 } },
      { label: 'Go there first. Blank means treasure.', s: { chs: 2, sta: 1 } },
      { label: 'Sell a very convincing map of it to a stranger.', s: { blf: 2, chs: 1 } },
      { label: 'Walk it end to end and chart every step.', s: { sta: 2, str: 1 } },
    ],
  },
  {
    prompt: 'Your character sheet lets you add one trait. You choose…',
    options: [
      { label: 'Tactical genius — always three moves ahead.', s: { str: 2, sta: 1 } },
      { label: "Unpredictability — even you don't know your next move.", s: { chs: 2, blf: 1 } },
      { label: 'A silver tongue that talks past any guard.', s: { blf: 2, str: 1 } },
      { label: 'Iron endurance that outlasts every foe.', s: { sta: 2, chs: 1 } },
    ],
  },
];

export const QUIZ_LEN = 5;

export function pickQuestions(): QuizQuestion[] {
  const pool = questionPool.slice();
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, QUIZ_LEN);
}

export const statOrder: StatKey[] = ['str', 'chs', 'blf', 'sta'];
export const statLabels: Record<StatKey, string> = { str: 'Strategy', chs: 'Chaos', blf: 'Bluff', sta: 'Stamina' };

export const classMap: Record<StatKey, { title: string; flavor: string }> = {
  str: {
    title: 'The Grand Strategist',
    flavor: 'You see the whole board before the first piece moves. Mercy is optional; the plan is not.',
  },
  chs: {
    title: 'The Agent of Chaos',
    flavor: 'Rules bend, tables flip, and somehow you come out ahead. Nobody knows how. Least of all you.',
  },
  blf: {
    title: 'The Silver-Tongued',
    flavor: "The truth is whatever you say last. Half the party still owes you a favor they don't remember agreeing to.",
  },
  sta: {
    title: 'The Unbreakable',
    flavor: 'Games end. Alliances crumble. You remain — still at the table, still smiling, at hour eleven.',
  },
};

/** Ranks the 4 stats by accumulated points (ties broken str>chs>blf>sta), assigning pips 5/4/3/2. */
export function scoreQuiz(points: Record<StatKey, number>): Record<StatKey, number> {
  const ranked = statOrder
    .slice()
    .sort((a, b) => (points[b] || 0) - (points[a] || 0) || statOrder.indexOf(a) - statOrder.indexOf(b));
  const vals = [5, 4, 3, 2];
  const stats = {} as Record<StatKey, number>;
  ranked.forEach((k, i) => {
    stats[k] = vals[i];
  });
  return stats;
}
