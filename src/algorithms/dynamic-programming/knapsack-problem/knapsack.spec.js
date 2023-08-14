import { describe, expect, it } from 'vitest';
import { knapsack, knapsack01 } from './knapsack';

describe('knapsack problem', () => {
  it('should return the maximum value that can be put in a knapsack', () => {
    const weights = [2, 2, 6, 5, 4];
    const values = [6, 3, 5, 4, 6];
    const capacity = 10;

    const result = knapsack(weights, values, capacity);

    expect(result).toBe(15);
  });

  it('should return the maximum value that can be put in a knapsack', () => {
    const weights = [2, 2, 6, 5, 4];
    const values = [6, 3, 5, 4, 6];
    const capacity = 10;

    const result = knapsack01(weights, values, capacity);

    expect(result).toBe(15);
  });
});
