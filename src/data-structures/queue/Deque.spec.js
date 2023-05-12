import { describe, expect, it } from 'vitest';
import { Deque } from './Deque';

describe('Deque', () => {
  it('addBack', () => {
    const deque = new Deque();

    deque.addBack(100);
    deque.addBack(200);

    expect(deque.size()).toBe(2);
    expect(deque.peekFront()).toBe(100);
    expect(deque.peekBack()).toBe(200);
  });

  it('removeFront', () => {
    const deque = new Deque();
    deque.addBack('John');
    deque.addBack('Jack');

    expect(deque.removeFront()).toBe('John');
    expect(deque.removeFront()).toBe('Jack');
    expect(deque.removeFront()).toBeUndefined();
  });

  it('addFront', () => {
    const deque = new Deque();

    deque.addBack(100);
    deque.addFront(200);

    expect(deque.size()).toBe(2);
    expect(deque.peekFront()).toBe(200);
  });

  it('removeBack', () => {
    const deque = new Deque();
    deque.addFront('John');
    deque.addFront('Jack');

    expect(deque.removeBack()).toBe('John');
    expect(deque.removeBack()).toBe('Jack');
    expect(deque.removeBack()).toBeUndefined();
  });

  it('peekFront', () => {
    const deque = new Deque();
    deque.addBack('John');
    deque.addBack('Jack');

    expect(deque.peekFront()).toBe('John');

    deque.removeFront();

    expect(deque.peekFront()).toBe('Jack');
  });

  it('peekBack', () => {
    const deque = new Deque();
    deque.addBack('John');
    deque.addBack('Jack');

    expect(deque.peekBack()).toBe('Jack');

    deque.removeBack();

    expect(deque.peekBack()).toBe('John');
  });

  it('isEmpty', () => {
    const deque = new Deque();
    expect(deque.isEmpty()).toBe(true);

    deque.addBack('John');

    expect(deque.isEmpty()).toBe(false);

    deque.removeFront();

    expect(deque.isEmpty()).toBe(true);
  });

  it('size', () => {
    const deque = new Deque();

    expect(deque.size()).toBe(0);

    deque.addBack('John');

    expect(deque.size()).toBe(1);
    deque.addBack('Jack');

    expect(deque.size()).toBe(2);
  });

  it('clear', () => {
    const deque = new Deque();

    deque.addBack('John');
    deque.addBack('Jack');

    expect(deque.size()).toBe(2);

    deque.clear();

    expect(deque.size()).toBe(0);
  });

  it('toString', () => {
    const deque = new Deque();

    expect(deque.toString()).toBe('');

    deque.addBack('John');
    deque.addBack('Jack');

    expect(deque.toString()).toBe('John,Jack');
  });
});
