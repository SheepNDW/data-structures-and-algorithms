import { describe, expect, it } from 'vitest';
import { subsets } from './subsets';

describe('subsets', () => {
  it('should return all subsets for [1, 2, 3]', () => {
    const nums = [1, 2, 3];
    // prettier-ignore
    const expected = [
      [],
      [1],
      [2],
      [1,2],
      [3],
      [1,3],
      [2,3],
      [1,2,3],
    ]

    const result = subsets(nums);

    expected.forEach((subset) => {
      expect(result).toContainEqual(subset);
    });

    expect(result.length).toEqual(expected.length);
  });

  it('should return all subsets for [0]', () => {
    const nums = [0];
    const expected = [[], [0]];

    const result = subsets(nums);

    expected.forEach((subset) => {
      expect(result).toContainEqual(subset);
    });

    expect(result.length).toEqual(expected.length);
  });
});
