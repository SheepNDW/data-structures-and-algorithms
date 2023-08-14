import { describe, expect, it } from 'vitest';
import { climbStairs } from './climbStair';

const testCases = [
  [2, 2],
  [3, 3],
  [4, 5],
  [20, 10946],
];

describe('climbStairs', () => {
  testCases.forEach(([n, expected]) => {
    it(`should return ${expected} for n = ${n}`, () => {
      expect(climbStairs(n)).toBe(expected);
    });
  });
});
