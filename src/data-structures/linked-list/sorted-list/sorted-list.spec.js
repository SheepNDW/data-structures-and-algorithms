import { describe, expect, it } from 'vitest';
import { SortedList } from './sorted-list';

describe('SortedList', () => {
  it('should insert element and keep it sorted', () => {
    const list = new SortedList();

    list.insert(111);
    list.insert(222);
    list.insert(333);
    list.insert(222);
    list.insert(444);
    list.insert(777);
    list.insert(666);

    const result = [];
    list.forEach((el) => result.push(el));
    const expected = [111, 222, 222, 333, 444, 666, 777];

    expect(result).toEqual(expected);
    expect(list.size()).toBe(expected.length);
  });

  it('should remove element from the list', () => {
    const list = new SortedList();

    list.insert(111);
    list.insert(222);
    list.insert(333);
    list.insert(222);
    list.insert(444);
    list.insert(777);
    list.insert(666);

    expect(list.remove(111)).toBe(true);
    expect(list.remove(333)).toBe(true);
    expect(list.remove(555)).toBe(false);
    expect(list.remove(777)).toBe(true);

    const result = [];
    list.forEach((el) => result.push(el));
    const expected = [222, 222, 444, 666];

    expect(result).toEqual(expected);
    expect(list.size()).toBe(expected.length);
    expect(list.head.element).toBe(222);
    expect(list.tail.element).toBe(666);
  });
});
