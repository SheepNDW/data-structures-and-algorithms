import { describe, expect, it } from 'vitest';
import { coinChangeGreedy } from './coinChangeGreedy';
import { coinChange2 } from '@/algorithms/dynamic-programming/coin-change/coinChange';

describe('coinChangeGreedy', () => {
  it('should return the minimum number of coins needed to make up the amount', () => {
    const coins = [1, 5, 10, 25];
    const amount = 36;

    const greedyResult = coinChangeGreedy(coins, amount);
    const dpResult = coinChange2(coins, amount);

    expect(greedyResult).toBe(dpResult);
  });

  it('should not find the minimum number of coins needed to make up the amount', () => {
    const coins = [1, 20, 50];
    const amount = 60;

    const greedyResult = coinChangeGreedy(coins, amount);
    const dpResult = coinChange2(coins, amount);

    expect(greedyResult).not.toBe(dpResult);
    expect(greedyResult).toBe(11);
    expect(dpResult).toBe(3);
  });
});
