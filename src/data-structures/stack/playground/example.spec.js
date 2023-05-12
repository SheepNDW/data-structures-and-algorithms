import { describe, expect, it } from 'vitest';
import { decimalToBinary, convertDecimalToBase } from './example';

describe('Stack example', () => {
  describe('decimalToBinary', () => {
    it('should convert decimal number to binary', () => {
      expect(decimalToBinary(0)).toBe('0');
      expect(decimalToBinary(1)).toBe('1');
      expect(decimalToBinary(2)).toBe('10');
      expect(decimalToBinary(3)).toBe('11');
      expect(decimalToBinary(4)).toBe('100');
      expect(decimalToBinary(5)).toBe('101');
      expect(decimalToBinary(6)).toBe('110');
      expect(decimalToBinary(7)).toBe('111');
      expect(decimalToBinary(8)).toBe('1000');
      expect(decimalToBinary(9)).toBe('1001');
      expect(decimalToBinary(10)).toBe('1010');
    });
  });

  describe('convertDecimalToBase', () => {
    it('should convert decimal number to binary', () => {
      expect(convertDecimalToBase(0, 2)).toBe('0');
      expect(convertDecimalToBase(1, 2)).toBe('1');
      expect(convertDecimalToBase(2, 2)).toBe('10');
      expect(convertDecimalToBase(10, 2)).toBe('1010');
    });

    it('should convert decimal number to octal', () => {
      expect(convertDecimalToBase(0, 8)).toBe('0');
      expect(convertDecimalToBase(1, 8)).toBe('1');
      expect(convertDecimalToBase(2, 8)).toBe('2');
      expect(convertDecimalToBase(8, 8)).toBe('10');
      expect(convertDecimalToBase(9, 8)).toBe('11');
      expect(convertDecimalToBase(10, 8)).toBe('12');
      expect(convertDecimalToBase(15, 8)).toBe('17');
      expect(convertDecimalToBase(16, 8)).toBe('20');
      expect(convertDecimalToBase(1024, 8)).toBe('2000');
    });

    it('should convert decimal number to hexadecimal', () => {
      expect(convertDecimalToBase(0, 16)).toBe('0');
      expect(convertDecimalToBase(1, 16)).toBe('1');
      expect(convertDecimalToBase(2, 16)).toBe('2');
      expect(convertDecimalToBase(8, 16)).toBe('8');
      expect(convertDecimalToBase(9, 16)).toBe('9');
      expect(convertDecimalToBase(10, 16)).toBe('A');
      expect(convertDecimalToBase(15, 16)).toBe('F');
      expect(convertDecimalToBase(255, 16)).toBe('FF');
      expect(convertDecimalToBase(256, 16)).toBe('100');
      expect(convertDecimalToBase(500, 16)).toBe('1F4');
      expect(convertDecimalToBase(1024, 16)).toBe('400');
    });
  });
});
