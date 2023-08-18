import { describe, expect, it } from 'vitest';
import { findLargest } from './findLargest';

describe('findLargest', () => {
  it('should find top 4 largest', () => {
    const array = [3, 11, 1, 5, 6, 9, 7, 8];
    const k = 4;

    const result = findLargest(array, k);
    result.sort((a, b) => b - a);

    expect(result).toEqual([11, 9, 8, 7]);
  });
});
