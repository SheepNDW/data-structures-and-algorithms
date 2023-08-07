import { describe, expect, it } from 'vitest';
import { permute } from './permute';

describe('permute', () => {
  it('should return all permutations for [1, 2, 3]', () => {
    const nums = [1, 2, 3];
    const expected = [
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ];

    const result = permute(nums);

    expected.forEach((permutation) => {
      expect(result).toContainEqual(permutation);
    });
    expect(result.length).toEqual(expected.length);
  });

  it('should return all permutations for [0, 1]', () => {
    const nums = [0, 1];
    const expected = [
      [0, 1],
      [1, 0],
    ];

    const result = permute(nums);

    expected.forEach((permutation) => {
      expect(result).toContainEqual(permutation);
    });
    expect(result.length).toEqual(expected.length);
  });

  it('should return all permutations for [1]', () => {
    const nums = [1];
    const expected = [[1]];

    const result = permute(nums);

    expect(result).toEqual(expected);
  });
});
