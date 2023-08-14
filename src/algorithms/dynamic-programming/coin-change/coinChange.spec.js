import { describe, expect, it } from 'vitest';
import { coinChange, coinChange2 } from './coinChange';

describe('Coin Change', () => {
  describe('Memoization Approach', () => {
    it('should return the minimum number of coins needed to make up the amount', () => {
      const coins = [1, 2, 5];
      const amount = 11;
      const expected = 3;

      const result = coinChange(coins, amount);

      expect(result).toEqual(expected);
    });

    it('should return -1 if the amount cannot be made up by any combination of the coins', () => {
      const coins = [2];
      const amount = 3;
      const expected = -1;

      const result = coinChange(coins, amount);

      expect(result).toEqual(expected);
    });

    it('should return 0 if the amount is 0', () => {
      const coins = [1, 2, 5];
      const amount = 0;
      const expected = 0;

      const result = coinChange(coins, amount);

      expect(result).toEqual(expected);
    });
  });

  describe('Bottom-up Dynamic Programming Approach', () => {
    it('should return the minimum number of coins needed to make up the amount', () => {
      const coins = [1, 2, 5];
      const amount = 11;
      const expected = 3;

      const result = coinChange2(coins, amount);

      expect(result).toEqual(expected);
    });

    it('should return -1 if the amount cannot be made up by any combination of the coins', () => {
      const coins = [2];
      const amount = 3;
      const expected = -1;

      const result = coinChange2(coins, amount);

      expect(result).toEqual(expected);
    });

    it('should return 0 if the amount is 0', () => {
      const coins = [1, 2, 5];
      const amount = 0;
      const expected = 0;

      const result = coinChange2(coins, amount);

      expect(result).toEqual(expected);
    });
  });
});
