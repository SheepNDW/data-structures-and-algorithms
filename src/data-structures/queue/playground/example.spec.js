import { describe, expect, it } from 'vitest';
import { passGame, palindromeChecker } from './example';

describe('passGame', () => {
  it('should return the winner of the pass game', () => {
    expect(passGame(['John', 'Jack', 'Camila', 'Ingrid', 'Carl'], 7)).toBe('John');
  });
});

describe('palindromeChecker', () => {
  it('should return true if the string is palindrome', () => {
    expect(palindromeChecker('abcba')).toBe(true);
    expect(palindromeChecker('d  a      D')).toBe(true);
    expect(palindromeChecker('假似真時真似假')).toBe(true);
  });
  it('should return false if the string is not palindrome', () => {
    expect(palindromeChecker('abcdba')).toBe(false);
  });
  it('should return true if the string is empty', () => {
    expect(palindromeChecker('')).toBe(true);
  });
});
