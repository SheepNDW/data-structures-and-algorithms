import { describe, expect, it } from 'vitest';
import { Hash } from './Hash';

describe('Hash Chaining', () => {
  it('should be able to insert and get data', () => {
    const hashTable = new Hash();

    hashTable.insert('key1', 'value1');

    expect(hashTable.get('key1')).toBe('value1');
  });

  it('should return null when a key does not exist', () => {
    const hashTable = new Hash();
    expect(hashTable.get('nonexistentkey')).toBeNull();
  });

  it('should be able to remove a specific key', () => {
    const hashTable = new Hash();

    hashTable.insert('key3', 'value3');
    hashTable.remove('key3');

    expect(hashTable.get('key3')).toBeNull();
  });

  it('should be able to traverse the data correctly when there are multiple entries', () => {
    const hashTable = new Hash();
    hashTable.insert('key4', 'value4');
    hashTable.insert('key5', 'value5');
    hashTable.insert('key6', 'value6');

    const result = [];
    hashTable.forEach((key, value) => {
      result.push({ key, value });
    });

    expect(result).toEqual([
      { key: 'key4', value: 'value4' },
      { key: 'key5', value: 'value5' },
      { key: 'key6', value: 'value6' },
    ]);
  });

  it('should handle hash collisions correctly', () => {
    const hashTable = new Hash();
    const key1 = 'key';
    const key2 = 'key';

    hashTable.insert(key1, 'value1');
    hashTable.insert(key2, 'value2');

    expect(hashTable.get(key1)).toBe('value2');
  });
});
