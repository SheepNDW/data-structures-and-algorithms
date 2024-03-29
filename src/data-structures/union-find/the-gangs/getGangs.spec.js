import { describe, expect, it } from 'vitest';
import { getGangs } from './getGangs';

describe('getGangs', () => {
  it('should return the number of gangs', () => {
    const n = 6;
    const counts = 4;
    const descriptions = [
      ['E', 1, 4],
      ['F', 3, 5],
      ['F', 4, 6],
      ['E', 1, 2],
    ];

    const result = getGangs(n, counts, descriptions);

    expect(result).toBe(3);
  });

  it('should return 1 when everyone is friends', () => {
    const n = 5;
    const counts = 4;
    const descriptions = [
      ['F', 1, 2],
      ['F', 2, 3],
      ['F', 3, 4],
      ['F', 4, 5],
    ];

    const result = getGangs(n, counts, descriptions);

    expect(result).toBe(1);
  });

  it('should return 100 when everyone is enemies', () => {
    const n = 100;
    const counts = 50;
    const descriptions = [
      ['E', 52, 85],
      ['E', 32, 49],
      ['E', 33, 84],
      ['E', 31, 42],
      ['E', 39, 50],
      ['E', 19, 36],
      ['E', 90, 93],
      ['E', 26, 41],
      ['E', 24, 73],
      ['E', 59, 78],
      ['E', 62, 69],
      ['E', 16, 65],
      ['E', 35, 60],
      ['E', 86, 87],
      ['E', 15, 38],
      ['E', 12, 95],
      ['E', 29, 66],
      ['E', 13, 40],
      ['E', 10, 57],
      ['E', 46, 81],
      ['E', 72, 89],
      ['E', 48, 63],
      ['E', 47, 68],
      ['E', 64, 97],
      ['E', 23, 28],
      ['E', 67, 70],
      ['E', 58, 79],
      ['E', 18, 37],
      ['E', 9, 20],
      ['E', 77, 100],
      ['E', 17, 54],
      ['E', 75, 92],
      ['E', 11, 56],
      ['E', 83, 88],
      ['E', 44, 61],
      ['E', 34, 43],
      ['E', 30, 45],
      ['E', 21, 80],
      ['E', 51, 74],
      ['E', 53, 76],
      ['E', 5, 82],
      ['E', 91, 94],
      ['E', 7, 22],
      ['E', 96, 99],
      ['E', 4, 27],
      ['E', 6, 25],
      ['E', 71, 98],
      ['E', 2, 55],
      ['E', 3, 14],
      ['E', 1, 8],
    ];

    const result = getGangs(n, counts, descriptions);

    expect(result).toBe(100);
  });
});
