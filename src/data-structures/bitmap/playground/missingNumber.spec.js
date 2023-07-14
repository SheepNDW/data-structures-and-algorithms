import { describe, expect, it } from 'vitest';
import { missingNumber1, missingNumber2, missingNumber } from './missingNumber';

describe('missingNumber', () => {
  describe('bitmap solution', () => {
    it('should return the missing numbers', () => {
      const nums = [5, 1, 6, 3, 7, 8, 10];
      const a = 1;
      const b = 11;

      const result = missingNumber1(nums, a, b);

      expect(result).toEqual([2, 4, 9]);

      const nums2 = [
        44, 26, 34, 25, 23, 42, 0, 43, 38, 14, 47, 19, 49, 6, 16, 41, 24, 35, 10, 4, 32, 5, 8, 15,
        31, 3, 46, 22, 2, 30, 28, 37, 1, 21, 39, 45, 9, 48, 36, 17, 7, 27, 18, 29, 13, 40, 11, 20,
        12,
      ];
      const a2 = 0;
      const b2 = 50;

      const result2 = missingNumber1(nums2, a2, b2);

      expect(result2).toEqual([33]);
    });
  });

  describe('array solution', () => {
    it('should return the missing numbers', () => {
      const nums = [5, 1, 6, 3, 7, 8, 10];
      const a = 1;
      const b = 11;

      const result = missingNumber2(nums, a, b);

      expect(result).toEqual([2, 4, 9]);
    });
  });

  describe('math solution (only one number missing)', () => {
    it('should return the missing number', () => {
      const nums = [5, 1, 6, 3, 7, 8, 2, 10, 4];

      const result = missingNumber(nums);

      expect(result).toBe(9);
    });
  });
});
