import { describe, expect, it } from 'vitest';
import { numIslands } from './numIslands';

describe('numIslands', () => {
  it('should return 1 for 1 island', () => {
    const grid = [
      ['1', '1', '1', '1', '0'],
      ['1', '1', '0', '1', '0'],
      ['1', '1', '0', '0', '0'],
      ['0', '0', '0', '0', '0'],
    ];

    const result = numIslands(grid);

    expect(result).toBe(1);
  });

  it('should return 3 for 3 islands', () => {
    const grid = [
      ['1', '1', '0', '0', '0'],
      ['1', '1', '0', '0', '0'],
      ['0', '0', '1', '0', '0'],
      ['0', '0', '0', '1', '1'],
    ];

    const result = numIslands(grid);

    expect(result).toBe(3);
  });
});
