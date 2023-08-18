import { describe, expect, it } from 'vitest';
import { findKthLargest } from './findKthLargest';

describe('findKthLargest', () => {
  it('should find 1st largest', () => {
    const array = [3, 11, 1, 5, 6, 9, 7, 8];
    const k = 0;

    const result = findKthLargest(array, k);

    expect(result).toBe(11);
  });

  it('should find 2nd largest', () => {
    const array = [3, 11, 1, 5, 6, 9, 7, 8];
    const k = 1;

    const result = findKthLargest(array, k);

    expect(result).toBe(9);
  });

  it('should find 3rd largest', () => {
    const array = [3, 11, 1, 5, 6, 9, 7, 8];
    const k = 2;

    const result = findKthLargest(array, k);

    expect(result).toBe(8);
  });
});
