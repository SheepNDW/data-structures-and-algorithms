import { describe, expect, it } from 'vitest';
import { decimalToBinary, convertDecimalToBase, match, evaluate } from './example';

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

  describe('match', () => {
    it('should return true for matching brackets', () => {
      const s = '{[()]()[{}]}';
      expect(match(s)).toBe(true);
    });

    it('should return false for not matching brackets', () => {
      const s = '{[(])}';
      expect(match(s)).toBe(false);
    });
  });

  describe('evaluate', () => {
    it('should evaluate the expression correctly', () => {
      const s = '12*(3+4)-6+8/1';
      const result = evaluate(s);
      expect(result).toBe(86);

      const s2 = '5*(2+3)-10/2';
      const result2 = evaluate(s2);
      expect(result2).toBe(20);

      const s3 = '8/(4-2)*0';
      const result3 = evaluate(s3);
      expect(result3).toBe(0);

      const s4 = '10+(3+7)*2';
      const result4 = evaluate(s4);
      expect(result4).toBe(30);
    });
  });
});
