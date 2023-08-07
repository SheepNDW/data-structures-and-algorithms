import { describe, expect, it } from 'vitest';
import { schedule } from './schedule';

describe('schedule', () => {
  it('should return the best time and flow', () => {
    const n = 3;
    const timeA = [2, 3, 2];
    const timeB = [1, 1, 3];

    const [bestTime, bestFlow] = schedule(n, timeA, timeB);

    expect(bestTime).toBe(18);
    expect(bestFlow).toEqual([0, 2, 1]);
  });
});
