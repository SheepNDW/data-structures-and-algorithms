import { describe, expect, it } from 'vitest';
import { DoublyList } from '../doubly-linked-list/DoublyLinkedList';
import { bubbleSort } from './bubble-sort';

describe('bubbleSort linked list implementation', () => {
  it('should sort an array', () => {
    const array = [2, 3, 8, 7, 4, 5, 9, 6, 1, 0];
    const list = new DoublyList();
    array.forEach((el, i) => {
      list.insertAt(i, el);
    });

    bubbleSort(list);
    const result = [];
    list.forEach((el) => result.push(el));

    expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
