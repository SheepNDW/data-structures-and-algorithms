import { describe, expect, it } from 'vitest';
import { LCS } from './longestCommonSubsequence';

describe('Longest Common Subsequence (LCS)', () => {
  it('should find longest common subsequence (LCS) between two strings', () => {
    const str1 = 'acbaed';
    const str2 = 'abcadf';

    expect(LCS(str1, str2)).toBe(4);
  });
});
