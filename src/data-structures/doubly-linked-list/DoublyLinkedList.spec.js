import { describe, expect, it } from 'vitest';
import { DoublyLinkedList } from './DoublyLinkedList';

describe('DoublyLinkedList', () => {
  it('should create empty linked list', () => {
    const list = new DoublyLinkedList();
    expect(list).toBeDefined();
    expect(list.size()).toBe(0);
    expect(list.getHead()).toBeNull();
    expect(list.getTail()).toBeNull();
  });

  it('should push element to list', () => {
    const list = new DoublyLinkedList();

    list.push(100);
    expect(list.size()).toBe(1);
    expect(list.getHead().element).toBe(100);
    expect(list.getTail().element).toBe(100);

    list.push(200);
    expect(list.size()).toBe(2);
    expect(list.getHead().element).toBe(100);
    expect(list.getTail().element).toBe(200);
  });

  it('should insert element at head', () => {
    const list = new DoublyLinkedList();

    list.insert(0, 100);

    expect(list.size()).toBe(1);
    expect(list.getHead().element).toBe(100);

    list.insert(0, 200);

    expect(list.size()).toBe(2);
    expect(list.getHead().element).toBe(200);
  });

  it('should insert element at tail', () => {
    const list = new DoublyLinkedList();

    list.insert(0, 100);

    expect(list.size()).toBe(1);
    expect(list.getTail().element).toBe(100);

    list.insert(1, 200);

    expect(list.size()).toBe(2);
    expect(list.getTail().element).toBe(200);
  });

  it('should insert element at middle', () => {
    const list = new DoublyLinkedList();

    list.insert(0, 100);
    list.insert(1, 200);
    list.insert(1, 300);

    expect(list.size()).toBe(3);
    expect(list.getNodeAt(1).element).toBe(300);
  });
});
