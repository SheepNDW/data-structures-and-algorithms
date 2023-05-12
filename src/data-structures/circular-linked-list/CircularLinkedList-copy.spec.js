import { describe, expect, it } from 'vitest';
import { CircularLinkedList } from './CircularLinkedList';

describe('CircularLinkedList', () => {
  it('should push elements to the end of the list', () => {
    const list = new CircularLinkedList();

    expect(list.size()).toBe(0);

    list.push(1);

    expect(list.getNodeAt(0).element).toBe(1);

    list.push(2);

    expect(list.getNodeAt(1).element).toBe(2);
  });

  it('should insert elements at a specific position in the list', () => {
    const list = new CircularLinkedList();

    expect(list.insert(1, 2)).toBeFalsy();

    expect(list.insert(0, 1)).toBeTruthy();
    expect(list.insert(1, 3)).toBeTruthy();
    expect(list.insert(1, 2)).toBeTruthy();

    expect(list.getNodeAt(0).element).toBe(1);
    expect(list.getNodeAt(1).element).toBe(2);
    expect(list.getNodeAt(2).element).toBe(3);
  });

  it('should remove elements at a specific position in the list', () => {
    const list = new CircularLinkedList();

    expect(list.removeAt(0)).toBeNull();

    list.push(1);
    list.push(2);
    list.push(3);

    expect(list.removeAt(1)).toBe(2);
    expect(list.getNodeAt(1).element).toBe(3);
  });
});
