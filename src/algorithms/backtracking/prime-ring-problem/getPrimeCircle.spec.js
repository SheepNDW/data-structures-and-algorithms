import { describe, expect, it } from 'vitest';
import { getPrimeCircle } from './getPrimeCircle';

const testCases = [
  { n: 2, expected: 1 },
  { n: 3, expected: 0 },
  { n: 4, expected: 2 },
  { n: 6, expected: 2 },
  { n: 8, expected: 4 },
  { n: 10, expected: 96 },
  { n: 16, expected: 81024 },
];

describe('prime ring problem', () => {
  testCases.forEach(({ n, expected }) => {
    it(`should return ${expected} for n = ${n}`, () => {
      expect(getPrimeCircle(n)).toBe(expected);
    });
  });
});
