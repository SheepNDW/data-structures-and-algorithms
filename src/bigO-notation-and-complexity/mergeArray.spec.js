import { describe, expect, it } from 'vitest';
import { mergeArray } from './mergeArray';

describe('mergeArray', () => {
  it('should merge two sorted arrays', () => {
    const src = [1, 1, 1, 1, 1, 1, 3, 5, 7, 9];
    const dest = [2, 4, 6, 8, 10, 12];
    const expected = [1, 1, 1, 1, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12];

    mergeArray(src, dest, 10, 6);

    expect(src).toEqual(expected);
  });
});
