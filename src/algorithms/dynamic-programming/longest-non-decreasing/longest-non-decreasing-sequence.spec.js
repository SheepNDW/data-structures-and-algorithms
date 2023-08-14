import { describe, expect, it } from 'vitest';
import { longestNonDecreasingSequence } from './longest-non-decreasing-sequence';

describe('Longest Non-Decreasing Subsequence', () => {
  it('should return the longest non-decreasing subsequence', () => {
    const array = [1, 2, 3, -9, 3, 9, 0, 11];

    const result = longestNonDecreasingSequence(array);

    expect(result).toEqual([1, 2, 3, 3, 9, 11]);
  });
});
