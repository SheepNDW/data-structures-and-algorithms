import { describe, expect, it } from 'vitest';
import { removeDuplicates, findNonRepeatingNumbers, twoSum } from './example';

describe('removeDuplicates', () => {
  it('should remove duplicates from an array', () => {
    const nums = [2, 3, 4, 2, 5, 6, 4, 88, 3];

    const result = removeDuplicates(nums);

    expect(result).toEqual([2, 3, 4, 5, 6, 88]);
  });
});

describe('findNonRepeatingNumbers', () => {
  it('should find the non-repeating numbers in an array', () => {
    const nums = [2, 3, 4, 2, 5, 6, 4, 88, 3];

    const result = findNonRepeatingNumbers(nums);

    expect(result).toEqual([5, 6, 88]);
  });
});

describe('twoSum', () => {
  it('should find the indices of two numbers that add up to a target', () => {
    const nums = [5, 75, 25];
    const target = 100;

    const result = twoSum(nums, target);

    expect(result).toEqual([1, 2]);
  });
});
