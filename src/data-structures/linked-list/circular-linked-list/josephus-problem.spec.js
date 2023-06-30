import { describe, expect, it } from 'vitest';
import { josephus } from './josephus-problem';

describe('Josephus Problem', () => {
  it('should return the correct number of the survivor', () => {
    expect(josephus(5, 2)).toBe(3);
    expect(josephus(10, 3)).toBe(4);
    expect(josephus(41, 3)).toBe(31);
  });
});
