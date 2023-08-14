import { describe, expect, it } from 'vitest';
import { LCS } from './longestCommonSubsequence';

const testCases = [
  { str1: 'abcde', str2: 'ace', expected: 3 },
  { str1: 'abc', str2: 'abc', expected: 3 },
  { str1: 'abc', str2: 'def', expected: 0 },
  { str1: 'ABCPDSFJGODIHJOFDIUSHGD', str2: 'OSDIHGKODGHBLKSJBHKAGHI', expected: 9 },
];

describe('Longest Common Subsequence (LCS)', () => {
  testCases.forEach(({ str1, str2, expected }) => {
    it(`should return ${expected} for ${str1} and ${str2}`, () => {
      expect(LCS(str1, str2)).toEqual(expected);
    });
  });
});
