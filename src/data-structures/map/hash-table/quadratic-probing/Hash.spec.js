import { describe, expect, it } from 'vitest';
import { Hash } from './Hash';

describe('Hash Quadratic Probing', () => {
  it('should correctly insert a key-value pair and return the value', () => {
    const hash = new Hash();
    const key = 'hello';
    const value = 'world';

    hash.insert(key, value);
    const result = hash.get(key);

    expect(result).toBe(value);
  });

  it('should return null if the key does not exist', () => {
    const hash = new Hash();
    const key = 'hello';

    const result = hash.get(key);

    expect(result).toBe(null);
  });

  it('should correctly remove a key-value pair', () => {
    const hash = new Hash();
    const key = 'hello';
    const value = 'world';

    hash.insert(key, value);
    const removed = hash.remove(key);
    const result = hash.get(key);

    expect(removed).toBe(true);
    expect(result).toBe(null);
  });

  it('should correctly return the size of the hashtable', () => {
    const hash = new Hash();
    const keys = ['one', 'two', 'three'];
    const values = ['uno', 'dos', 'tres'];

    keys.forEach((key, i) => hash.insert(key, values[i]));
    const size = hash.size();

    expect(size).toBe(keys.length);
  });

  it('should handle hash collisions correctly', () => {
    const hash = new Hash();
    const key1 = 'key';
    const key2 = 'key';

    hash.insert(key1, 'value1');
    hash.insert(key2, 'value2');

    expect(hash.get(key1)).toBe('value2');
  });
});
