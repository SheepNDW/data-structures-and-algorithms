import { describe, expect, it } from 'vitest';
import { knapsack01 } from './knapsack01.js';

describe('knapsack01', () => {
  it('should solve 0/1 knapsack problem', () => {
    const n = 5;
    const weights = [2, 2, 6, 5, 4];
    const values = [6, 3, 5, 4, 6];
    const capacity = 10;

    const [maxValue, items] = knapsack01(n, weights, values, capacity);

    expect(maxValue).toBe(15);
    expect(items).toEqual([1, 1, 0, 0, 1]);
  });
});
