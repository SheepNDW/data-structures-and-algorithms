import { describe, expect, it } from 'vitest';
import { binarySearch } from './binarySearch';

describe('binarySearch', () => {
  it('should return the index of found element', () => {
    expect(binarySearch(2, [2, 4, 5, 7, 9])).toBe(0);
    expect(binarySearch(5, [2, 4, 5, 7, 9])).toBe(2);
    expect(binarySearch(9, [2, 4, 5, 7, 9])).toBe(4);
  });

  it('should return -1 for not found element', () => {
    expect(binarySearch(1, [2, 4, 5, 7, 9])).toBe(-1);
    expect(binarySearch(3, [2, 4, 5, 7, 9])).toBe(-1);
    expect(binarySearch(6, [2, 4, 5, 7, 9])).toBe(-1);
    expect(binarySearch(8, [2, 4, 5, 7, 9])).toBe(-1);
    expect(binarySearch(10, [2, 4, 5, 7, 9])).toBe(-1);
  });
});
