import { describe, expect, it } from 'vitest';
import { HashTable } from './HashTable';

describe('HashTable', () => {
  it('should set, get and remove items correctly', () => {
    const map = new HashTable();

    expect(map.set('name', 'sheep')).toBe(true);
    expect(map.set({ a: 1 }, 'a')).toBe(true);

    expect(map.get('name')).toBe('sheep');
    expect(map.get({ a: 1 })).toBe('a');

    expect(map.remove('name')).toBe(true);
    expect(map.remove({ a: 1 })).toBe(true);

    expect(map.get('name')).toBe(undefined);
    expect(map.get({ a: 1 })).toBe(undefined);
  });

  it('should handle hash code collisions correctly', () => {
    const map = new HashTable();

    expect(map.set('name', 'sheep')).toBe(true);
    expect(map.set('name', 'dog')).toBe(true);

    expect(map.get('name')).toBe('dog');

    expect(map.remove('name')).toBe(true);
    expect(map.get('name')).toBe(undefined);
  });
});
