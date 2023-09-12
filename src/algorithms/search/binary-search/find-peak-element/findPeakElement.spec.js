import { describe, expect, it } from 'vitest';
import { findPeakElement } from './findPeakElement';

describe('findPeakElement', () => {
  it('should find peak element in array with one element', () => {
    expect(findPeakElement([1])).toBe(0);
  });

  it('should find peak element in array with two elements', () => {
    expect(findPeakElement([1, 2])).toBe(1);
    expect(findPeakElement([2, 1])).toBe(0);
  });

  it('should find peak element in array with many elements', () => {
    expect(findPeakElement([1, 2, 3, 1])).toBe(2);
    expect(findPeakElement([1, 2, 1, 3, 5, 6, 4])).toBe(5);
  });
});
