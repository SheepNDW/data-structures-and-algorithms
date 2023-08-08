import { describe, expect, it } from 'vitest';
import { findQueen } from './findQueen';

describe('8 Queens puzzle', () => {
  it('should find all possible solutions', () => {
    const solutionsCount = findQueen();
    expect(solutionsCount).toBe(92);
  });
});
