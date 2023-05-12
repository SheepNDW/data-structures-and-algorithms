import { describe, expect, it } from 'vitest';
import { exist } from './wordSearch';

describe('Word Search', () => {
  it('should return true if the word exists in the board', () => {
    const board = [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ];
    const word = 'ABCCED';
    const word2 = 'SEE';

    expect(exist(board, word)).toBe(true);
    expect(exist(board, word2)).toBe(true);
  });

  it('should return false if the word does not exist in the board', () => {
    const board = [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ];
    const word = 'ABCB';

    expect(exist(board, word)).toBe(false);
  });
});
