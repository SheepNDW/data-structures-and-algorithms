import { describe, expect, it } from 'vitest';
import { lexSort } from './lexicographicOrder';

describe('lexicographic order (radix sort implementation)', () => {
  it('should sort array in lexicographic order', () => {
    const array = ['ac', 'ee', 'ef', 'b', 'z', 'f', 'ep', 'gaaa', 'azh', 'az', 'r'];

    const result = lexSort(array);

    expect(result).toEqual(['ac', 'az', 'azh', 'b', 'ee', 'ef', 'ep', 'f', 'gaaa', 'r', 'z']);
  });
});
