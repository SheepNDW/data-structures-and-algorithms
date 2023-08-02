import { describe, expect, it } from 'vitest';
import { subsetsWithDup } from './subsetsWithDup';

describe('subsetsWithDup', () => {
  it('should return all unique subsets for the array [1,2,2]', () => {
    const nums = [1, 2, 2];
    // prettier-ignore
    const expected = [
      [],
      [1],
      [2],
      [1,2],
      [2,2],
      [1,2,2],
    ];

    const result = subsetsWithDup(nums);

    expect(result.length).toEqual(expected.length);

    expected.forEach((subset) => {
      expect(result).toContainEqual(subset);
    });
  });

  it('should return all unique subsets for the array [0]', () => {
    const nums = [0];
    const expected = [[], [0]];

    const result = subsetsWithDup(nums);

    expect(result.length).toEqual(expected.length);

    expected.forEach((subset) => {
      expect(result).toContainEqual(subset);
    });
  });

  it('should return all unique subsets for the array [4,4,4,1,4]', () => {
    const nums = [4, 4, 4, 1, 4];
    // prettier-ignore
    const expected = [
      [],
      [1],
      [1,4],
      [1,4,4],
      [1,4,4,4],
      [1,4,4,4,4],
      [4],
      [4,4],
      [4,4,4],
      [4,4,4,4],
    ];

    const result = subsetsWithDup(nums);

    expect(result.length).toEqual(expected.length);

    expected.forEach((subset) => {
      expect(result).toContainEqual(subset);
    });
  });
});
