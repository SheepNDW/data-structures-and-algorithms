import { beforeEach, describe, expect, it } from 'vitest';
import { change1, change0, getBit, BitMap } from './Bitmap';

describe('change1', () => {
  it('should set the digit-th bit of the number to 1', () => {
    const num = 8; // 二進位表示法是 1000
    const digit = 0;

    const result = change1(num, digit);

    expect(result).toBe(9); // 二進位表示法是 1001，表示第 0 位已經被設為 1
  });
});

describe('change0', () => {
  it('should set the digit-th bit of the number to 0', () => {
    const num = 7; // 二進位表示法是 111
    const digit = 1;

    const result = change0(num, digit);

    expect(result).toBe(5); // 二進位表示法是 101，表示第 1 位已經被設為 0
  });
});

describe('getBit', () => {
  it('should get the digit-th bit of the number', () => {
    const num = 6; // 二進位表示法是 110
    const digit = 1;

    const result = getBit(num, digit);

    expect(result).toBe(1); // 第 1 位是 1
  });
});

describe('BitMap', () => {
  /** @type {BitMap} */
  let bitmap;
  const initialArray = [0, 1, 17, 33, 49];

  beforeEach(() => {
    bitmap = new BitMap(initialArray);
  });

  it('should set the correct bit values on initialization', () => {
    expect(bitmap.bits).toEqual([3, 2, 2, 2]); // because initial array was [0, 1, 17, 33, 49]
  });

  it('should set a digit to 1', () => {
    const result = bitmap.change1(bitmap.bits[0], 2);
    expect(result).toBe(7); // because the 2nd bit was set to 1, so 3 in binary (11) becomes 7 in binary (111)
  });

  it('should set a digit to 0', () => {
    const result = bitmap.change0(bitmap.bits[0], 0);
    expect(result).toBe(2); // because the 0th bit was set to 0, so 3 in binary (11) becomes 2 in binary (10)
  });

  it('should get a digit value correctly', () => {
    const result = bitmap.get(17);
    expect(result).toBe(1); // the 17th bit is 1
  });

  it('should convert to array correctly', () => {
    const result = bitmap.toArray();
    expect(result).toEqual(initialArray); // should be the same as the initial array
  });
});
