import { describe, expect, it } from 'vitest';
import { fractionalKnapsack } from './fractional-knapsack';

describe('fractionalKnapsack', () => {
  it('should solve fractional knapsack problem', () => {
    const weights = [2, 2, 6, 5, 4];
    const values = [6, 3, 5, 4, 6];
    const capacity = 10;

    const result = fractionalKnapsack(capacity, weights, values);

    expect(result).toBe(16.666666666666668);
  });
});
