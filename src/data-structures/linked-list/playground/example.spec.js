import { describe, expect, it } from 'vitest';
import { palindromeCheckerLinkedlist, passGameLinkedlist } from './example';

describe('palindromeCheckerLinkedlist', () => {
  it('should return true for palindrome string', () => {
    expect(palindromeCheckerLinkedlist('madam')).toBe(true);
    expect(palindromeCheckerLinkedlist('racecar')).toBe(true);
    expect(palindromeCheckerLinkedlist('1000000001')).toBe(true);
    expect(palindromeCheckerLinkedlist('d  a      D')).toBe(true);
    expect(palindromeCheckerLinkedlist('假似真時真似假')).toBe(true);
  });
  it('should return false for non-palindrome string', () => {
    expect(palindromeCheckerLinkedlist('ab')).toBe(false);
    expect(palindromeCheckerLinkedlist('1000000002')).toBe(false);
  });
});

describe('passGameLinkedlist', () => {
  it('should return the winner of the pass game', () => {
    expect(passGameLinkedlist(['John', 'Jack', 'Camila', 'Ingrid', 'Carl'], 7)).toBe('John');
  });
});
