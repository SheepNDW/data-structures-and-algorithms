import { describe, expect, it } from 'vitest';
import { sequentialSearch } from './sequentialSearch';

describe('sequentialSearch', () => {
  it('should return -1 if not found', () => {
    expect(sequentialSearch([1, 2, 3, 4], 5)).toBe(-1);
  });

  it('should return index if found', () => {
    expect(sequentialSearch([1, 2, 3, 4], 3)).toBe(2);
  });
});
