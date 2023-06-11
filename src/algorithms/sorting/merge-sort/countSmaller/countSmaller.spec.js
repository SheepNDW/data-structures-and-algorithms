import { describe, expect, it } from 'vitest';
import { countSmaller } from './countSmaller';

describe('countSmaller', () => {
  it('should return counts of smaller numbers to the right for a given array of integers', () => {
    const nums = [5, 2, 6, 1];
    const expectedOutput = [2, 1, 1, 0];

    const result = countSmaller(nums);

    expect(result).toEqual(expectedOutput);
  });

  it('should return [0] when the array has only one element', () => {
    const nums = [-1];
    const expectedOutput = [0];

    const result = countSmaller(nums);

    expect(result).toEqual(expectedOutput);
  });

  it('should return [0,0] when the array has two identical elements', () => {
    const nums = [-1, -1];
    const expectedOutput = [0, 0];

    const result = countSmaller(nums);

    expect(result).toEqual(expectedOutput);
  });

  it('should return an empty array when the input array is empty', () => {
    const nums = [];
    const expectedOutput = [];

    const result = countSmaller(nums);

    expect(result).toEqual(expectedOutput);
  });

  it('should handle arrays with large numbers and negative numbers', () => {
    const nums = [10000, 9999, 9998, 10000, -10000];
    const expectedOutput = [3, 2, 1, 1, 0];

    const result = countSmaller(nums);

    expect(result).toEqual(expectedOutput);
  });

  it('should handle large input within time limit', () => {
    const nums = new Array(100000).fill().map(() => Math.floor(Math.random() * 20001) - 10000);

    const startTime = Date.now();
    countSmaller(nums);
    const endTime = Date.now();

    const timeTaken = endTime - startTime;
    expect(timeTaken).toBeLessThan(2000); // 假設我們的時間限制為 2 秒
  });
});
