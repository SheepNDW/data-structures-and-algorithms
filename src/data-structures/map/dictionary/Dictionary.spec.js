import { describe, expect, it } from 'vitest';
import { Dictionary } from './Dictionary';

describe('Dictionary', () => {
  it('should return string representation of the key', () => {
    const dictionary = new Dictionary();
    expect(dictionary.toString(1)).toBe('1');
    expect(dictionary.toString('1')).toBe('1');
    expect(dictionary.toString(null)).toBe('NULL');
    expect(dictionary.toString(undefined)).toBe('UNDEFINED');
    expect(dictionary.toString({})).toBe('{}');
    expect(dictionary.toString({ a: 1 })).toBe('{"a":1}');
  });

  it('should verify if key exists', () => {
    const dictionary = new Dictionary();

    expect(dictionary.hasKey(1)).toBe(false);

    dictionary.set(1, 1);

    expect(dictionary.hasKey(1)).toBe(true);

    dictionary.set({ a: 1 }, 'aaa');

    expect(dictionary.hasKey({ a: 1 })).toBe(true);
  });

  it('should set value to key and get value by key', () => {
    const dictionary = new Dictionary();

    expect(dictionary.get('name')).toBe(undefined);

    expect(dictionary.set(1, 1)).toBe(true);
    expect(dictionary.get(1)).toBe(1);

    expect(dictionary.set({ a: 1 }, 'aaa')).toBe(true);
    expect(dictionary.get({ a: 1 })).toBe('aaa');
  });

  it('should remove value from dictionary', () => {
    const dictionary = new Dictionary();

    expect(dictionary.remove(1)).toBe(false);

    dictionary.set(1, 1);

    expect(dictionary.remove(1)).toBe(true);
    expect(dictionary.get(1)).toBe(undefined);

    dictionary.set({ a: 1 }, 'aaa');

    expect(dictionary.remove({ a: 1 })).toBe(true);
    expect(dictionary.get({ a: 1 })).toBe(undefined);
  });

  it('should return all keys', () => {
    const dictionary = new Dictionary();

    expect(dictionary.keys()).toEqual([]);

    dictionary.set(1, 'a');
    dictionary.set(2, 'b');
    dictionary.set(3, 'c');

    expect(dictionary.keys()).toEqual([1, 2, 3]);
  });

  it('should return all values', () => {
    const dictionary = new Dictionary();

    expect(dictionary.values()).toEqual([]);

    dictionary.set(1, 'a');
    dictionary.set(2, 'b');
    dictionary.set(3, 'c');

    expect(dictionary.values()).toEqual(['a', 'b', 'c']);
  });

  it('should return all key-value pairs', () => {
    const dictionary = new Dictionary();

    expect(dictionary.keyValues()).toEqual([]);

    dictionary.set(1, 'a');
    dictionary.set(2, 'b');
    dictionary.set(3, 'c');

    expect(dictionary.keyValues()).toEqual([
      { key: 1, value: 'a' },
      { key: 2, value: 'b' },
      { key: 3, value: 'c' },
    ]);
  });

  it('should return size of dictionary', () => {
    const dictionary = new Dictionary();

    expect(dictionary.size()).toBe(0);

    dictionary.set(1, 'a');
    dictionary.set(2, 'b');

    expect(dictionary.size()).toBe(2);
  });

  it('should verify if dictionary is empty', () => {
    const dictionary = new Dictionary();

    expect(dictionary.isEmpty()).toBe(true);

    dictionary.set(1, 'a');

    expect(dictionary.isEmpty()).toBe(false);
  });

  it('should clear dictionary', () => {
    const dictionary = new Dictionary();

    dictionary.set(1, 'a');
    dictionary.set(2, 'b');

    expect(dictionary.size()).toBe(2);

    dictionary.clear();

    expect(dictionary.size()).toBe(0);
  });

  it('should loop through dictionary', () => {
    const dictionary = new Dictionary();

    dictionary.set(1, 'a');
    dictionary.set(2, 'b');
    dictionary.set(3, 'c');

    const keys = [];
    const values = [];

    dictionary.forEach((key, value) => {
      keys.push(key);
      values.push(value);
    });

    expect(keys).toEqual([1, 2, 3]);
    expect(values).toEqual(['a', 'b', 'c']);
  });
});
