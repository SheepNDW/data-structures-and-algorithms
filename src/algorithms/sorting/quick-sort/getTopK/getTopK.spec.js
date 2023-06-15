import { describe, expect, it } from 'vitest';
import { getTopK } from './getTopK';

describe('getTopK', () => {
  it('should return top k smallest elements', () => {
    const arr = [11, 9, 6, 17, 0, 1, 2, 18, 3, 4, 8, 5];
    const k = 4;

    const result = getTopK(arr, k);

    expect(result).toEqual([0, 1, 2, 3]);
  });
});
