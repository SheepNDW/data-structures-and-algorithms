import { describe, expect, it } from 'vitest';
import { shuffle } from './shuffle';

describe('Fisher-Yates shuffle', () => {
  it('should shuffle array (check console)', () => {
    const count = { 123: 0, 132: 0, 213: 0, 231: 0, 312: 0, 321: 0 };

    for (let i = 0; i < 60000; i++) {
      const array = [1, 2, 3];
      shuffle(array);
      count[array.join('')]++;
    }

    console.log(count);
  });
});
