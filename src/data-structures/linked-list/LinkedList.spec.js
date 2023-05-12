import { describe, expect, it } from 'vitest';
import { LinkedList } from './LinkedList';

describe('LinkedList', () => {
  it('should create an empty linked list', () => {
    const list = new LinkedList();
    expect(list).toBeDefined();
    expect(list.length).toBe(0);
    expect(list.head).toBeNull();
  });
  it('should push a new element at the end of the list', () => {
    const list = new LinkedList();
    list.push(100);
    list.push(200);
    expect(list.size()).toBe(2);
    expect(list.head.element).toBe(100);
    expect(list.head.next.element).toBe(200);
  });
  it('should remove the element at the specified position in this list', () => {
    const list = new LinkedList();
    list.push(100);
    list.push(200);
    list.push(300);
    expect(list.size()).toBe(3);
    expect(list.removeAt(1)).toBe(200);
    expect(list.size()).toBe(2);
    expect(list.head.element).toBe(100);
    expect(list.head.next.element).toBe(300);
    expect(list.removeAt(0)).toBe(100);
    expect(list.size()).toBe(1);
    expect(list.head.element).toBe(300);
    expect(list.head.next).toBeNull();
  });
  it('should remove the first occurrence of the specified element from this list', () => {
    const list = new LinkedList();
    list.push(100);
    list.push(200);
    list.push(300);
    expect(list.size()).toBe(3);
    expect(list.remove(200)).toBe(200);
    expect(list.size()).toBe(2);
    expect(list.head.element).toBe(100);
    expect(list.head.next.element).toBe(300);
    expect(list.remove(100)).toBe(100);
    expect(list.size()).toBe(1);
    expect(list.head.element).toBe(300);
    expect(list.head.next).toBeNull();
  });
  it('should insert an element at a given position in the list', () => {
    const list = new LinkedList();
    list.push(100);
    list.push(200);
    list.push(300);
    expect(list.size()).toBe(3);
    expect(list.insert(1, 400)).toBe(true);
    expect(list.size()).toBe(4);
    expect(list.head.element).toBe(100);
    expect(list.head.next.element).toBe(400);
    expect(list.head.next.next.element).toBe(200);
    expect(list.head.next.next.next.element).toBe(300);
    expect(list.insert(10, 500)).toBe(false);
    expect(list.size()).toBe(4);
    expect(list.head.element).toBe(100);
    expect(list.head.next.element).toBe(400);
    expect(list.head.next.next.element).toBe(200);
    expect(list.head.next.next.next.element).toBe(300);
  });
  it('should return the index of the element in the list or -1 if the element is not in the list', () => {
    const list = new LinkedList();
    list.push(100);
    list.push(200);
    list.push(300);
    expect(list.indexOf(100)).toBe(0);
    expect(list.indexOf(1000)).toBe(-1);
  });
});
