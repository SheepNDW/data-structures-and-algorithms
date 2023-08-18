import { describe, expect, it } from 'vitest';
import { nthUglyNumber } from './nthUglyNumber';

const testCases = [
  [1, 1],
  [2, 2],
  [3, 3],
  [4, 4],
  [5, 5],
  [10, 12],
  [400, 311040],
  [1212, 188743680],
];

describe('nthUglyNumber', () => {
  testCases.forEach(([n, expected]) => {
    it(`should return ${expected} for ${n}th ugly number`, () => {
      expect(nthUglyNumber(n)).toBe(expected);
    });
  });
});
