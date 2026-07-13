export interface WinRow {
  game: string;
  player: string;
  /** Manual override, only ever set for "Game not listed" custom entries. */
  points?: number | null;
}

/** Resolves the points a recorded win is worth: a stored override (custom
 *  "Game not listed" entries) wins; otherwise falls back to the live
 *  games.ts win-value formula looked up by name. */
export function pointsForWin(row: WinRow, gamePoints: Record<string, number>): number {
  if (typeof row.points === 'number') return row.points;
  return gamePoints[row.game] ?? 0;
}
