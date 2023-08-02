import { describe, expect, it } from 'vitest';
import { combinationSum2 } from './combinationSum2';

describe('combinationSum2', () => {
  it('when candidates are [10,1,2,7,6,1,5] and target is 8, it should return [[1,1,6],[1,2,5],[1,7],[2,6]]', () => {
    const candidates = [10, 1, 2, 7, 6, 1, 5];
    const target = 8;
    const expected = [
      [1, 1, 6],
      [1, 2, 5],
      [1, 7],
      [2, 6],
    ];

    const result = combinationSum2(candidates, target);

    expect(result.length).toBe(expected.length);
    expected.forEach((combination) => {
      expect(result).toContainEqual(combination);
    });
  });

  it('when candidates are [2,5,2,1,2] and target is 5, it should return [[1,2,2],[5]]', () => {
    const candidates = [2, 5, 2, 1, 2];
    const target = 5;
    const expected = [[1, 2, 2], [5]];

    const result = combinationSum2(candidates, target);

    expect(result.length).toBe(expected.length);
    expected.forEach((combination) => {
      expect(result).toContainEqual(combination);
    });
  });
});
