import { describe, expect, it } from 'vitest';
import { findCircleNum } from './findCircleNum';

describe('findCircleNum', () => {
  it('should return the number of provinces', () => {
    const isConnected = [
      [1, 1, 0],
      [1, 1, 0],
      [0, 0, 1],
    ];

    const isConnected2 = [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ];

    const isConnected3 = [
      [1, 1, 0],
      [1, 1, 1],
      [0, 1, 1],
    ];

    expect(findCircleNum(isConnected)).toBe(2);
    expect(findCircleNum(isConnected2)).toBe(3);
    expect(findCircleNum(isConnected3)).toBe(1);
  });
});
