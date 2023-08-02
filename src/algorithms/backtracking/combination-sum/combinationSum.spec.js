import { describe, expect, it } from 'vitest';
import { combinationSum } from './combinationSum';

describe('combinationSum', () => {
  it('when candidates are [2,3,6,7] and target is 7, it should return [[2,2,3],[7]]', () => {
    const candidates = [2, 3, 6, 7];
    const target = 7;
    const expected = [[2, 2, 3], [7]];

    const result = combinationSum(candidates, target);

    expect(result.length).toBe(expected.length);
    expected.forEach((combination) => {
      expect(result).toContainEqual(combination);
    });
  });

  it('when candidates are [2,3,5] and target is 8, it should return [[2,2,2,2],[2,3,3],[3,5]]', () => {
    const candidates = [2, 3, 5];
    const target = 8;
    const expected = [
      [2, 2, 2, 2],
      [2, 3, 3],
      [3, 5],
    ];

    const result = combinationSum(candidates, target);

    expect(result.length).toBe(expected.length);
    expected.forEach((combination) => {
      expect(result).toContainEqual(combination);
    });
  });

  it('when candidates are [2] and target is 1, it should return an empty array', () => {
    const candidates = [2];
    const target = 1;

    const result = combinationSum(candidates, target);

    expect(result).toEqual([]);
  });
});
