import { describe, expect, it } from 'vitest';
import { fibonacci, fib, fib2 } from './fib';

const testCases = [
  [0, 0],
  [1, 1],
  [2, 1],
  [3, 2],
  [4, 3],
  [5, 5],
  [6, 8],
  [40, 102334155],
  [100, 354224848179262000000],
];

describe('fibonacci sequence', () => {
  describe('top-down approach (memoization)', () => {
    testCases.forEach(([n, expected]) => {
      it(`should return ${expected} for ${n}`, () => {
        expect(fibonacci(n)).toBe(expected);
      });
    });
  });

  describe('bottom-up approach', () => {
    testCases.forEach(([n, expected]) => {
      it(`should return ${expected} for ${n}`, () => {
        expect(fib(n)).toBe(expected);
      });
    });
  });

  describe('bottom-up approach (space optimized)', () => {
    testCases.forEach(([n, expected]) => {
      it(`should return ${expected} for ${n}`, () => {
        expect(fib2(n)).toBe(expected);
      });
    });
  });
});
