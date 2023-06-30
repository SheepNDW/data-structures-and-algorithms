import { describe, expect, it } from 'vitest';
import { CircularLink } from './CircularLinkedList';

describe('CircularLinkedList', () => {
  it('should create empty linked list', () => {
    const list = new CircularLink();
    expect(list).toBeDefined();
    expect(list.head).toBeNull();
    expect(list.isEmpty()).toBe(true);
  });

  it('should insert element to list in specific position', () => {
    const list = new CircularLink();

    list.insertAt(0, 111);
    list.insertAt(1, 222);
    list.insertAt(2, 333);
    list.insertAt(1, 444);

    const result = [];
    list.forEach((el) => result.push(el));
    const expected = [111, 444, 222, 333];

    expect(result).toEqual(expected);
  });

  it('should remove element from list by index', () => {
    const list = new CircularLink();

    list.insertAt(0, 111);
    list.insertAt(1, 222);
    list.insertAt(2, 333);
    list.insertAt(1, 444);

    list.removeAt(0);
    list.removeAt(2);

    const result = [];
    list.forEach((el) => result.push(el));
    const expected = [444, 222];

    expect(result).toEqual(expected);
  });

  it('should be circular list', () => {
    const list = new CircularLink();

    list.insertAt(0, 111);
    list.insertAt(1, 222);
    list.insertAt(2, 333);
    list.insertAt(3, 444);

    const lastNode = list.head.prev;

    expect(lastNode.next.element).toBe(list.head.element);
  });
});
