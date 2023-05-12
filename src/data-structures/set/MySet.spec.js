import { describe, expect, it } from 'vitest';
import { MySet } from './MySet';

describe('MySet', () => {
  it('should create an empty set', () => {
    const set = new MySet();
    expect(set.size()).toBe(0);
    expect(set.values()).toEqual([]);
  });

  it('should add new element to the set', () => {
    const set = new MySet();
    expect(set.add(1)).toBe(true);
    expect(set.values()).toEqual([1]);
    expect(set.has(1)).toBe(true);
    expect(set.size()).toBe(1);
  });

  it('should not add duplicate element to the set', () => {
    const set = new MySet();
    expect(set.add(1)).toBe(true);
    expect(set.add(1)).toBe(false);
    expect(set.values()).toEqual([1]);
    expect(set.has(1)).toBe(true);
    expect(set.size()).toBe(1);
  });

  it('should add multiple elements to the set', () => {
    const set = new MySet();
    expect(set.add(1)).toBe(true);
    expect(set.add(2)).toBe(true);
    expect(set.add(3)).toBe(true);
    expect(set.values()).toEqual([1, 2, 3]);
    expect(set.has(1)).toBe(true);
    expect(set.has(2)).toBe(true);
    expect(set.has(3)).toBe(true);
    expect(set.size()).toBe(3);
  });

  it('should delete element from the set', () => {
    const set = new MySet();
    set.add(1);
    set.add(2);
    set.add(3);
    expect(set.delete(2)).toBe(true);
    expect(set.values()).toEqual([1, 3]);
    expect(set.has(1)).toBe(true);
    expect(set.has(2)).toBe(false);
    expect(set.has(3)).toBe(true);
    expect(set.size()).toBe(2);
  });

  it('should not delete non existing element from the set', () => {
    const set = new MySet();
    set.add(1);
    set.add(2);
    set.add(3);
    expect(set.delete(4)).toBe(false);
    expect(set.values()).toEqual([1, 2, 3]);
    expect(set.has(1)).toBe(true);
    expect(set.has(2)).toBe(true);
    expect(set.has(3)).toBe(true);
    expect(set.size()).toBe(3);
  });

  it('should clear the set', () => {
    const set = new MySet();
    set.add(1);
    set.add(2);
    set.add(3);
    set.clear();
    expect(set.values()).toEqual([]);
    expect(set.has(1)).toBe(false);
    expect(set.has(2)).toBe(false);
    expect(set.has(3)).toBe(false);
    expect(set.size()).toBe(0);
  });

  it('should return the size of the set', () => {
    const set = new MySet();
    expect(set.size()).toBe(0);
    set.add(1);
    expect(set.size()).toBe(1);
    set.add(2);
    expect(set.size()).toBe(2);
    set.add(3);
    expect(set.size()).toBe(3);
  });
});

describe('unique array', () => {
  it('should remove duplicate elements from an array', () => {
    const set = new MySet();
    const arr = [1, 2, 3, 1, 2, 3, 1, 2, 3];
    arr.forEach((element) => set.add(element));
    expect(set.values()).toEqual([1, 2, 3]);
  });
});
