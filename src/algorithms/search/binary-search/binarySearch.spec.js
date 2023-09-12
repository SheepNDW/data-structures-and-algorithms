import { describe, expect, it } from 'vitest';
import { binarySearch } from './binarySearch';

describe('binarySearch', () => {
  it('should return the index of found element', () => {
    expect(binarySearch([2, 4, 5, 7, 9], 2)).toBe(0);
    expect(binarySearch([2, 4, 5, 7, 9], 5)).toBe(2);
    expect(binarySearch([2, 4, 5, 7, 9], 9)).toBe(4);
  });

  it('should return -1 for not found element', () => {
    expect(binarySearch([2, 4, 5, 7, 9], 1)).toBe(-1);
    expect(binarySearch([2, 4, 5, 7, 9], 3)).toBe(-1);
    expect(binarySearch([2, 4, 5, 7, 9], 6)).toBe(-1);
    expect(binarySearch([2, 4, 5, 7, 9], 8)).toBe(-1);
    expect(binarySearch([2, 4, 5, 7, 9], 10)).toBe(-1);
  });
});
