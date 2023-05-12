import { describe, expect, it } from 'vitest';
import { Queue } from './Queue';

describe('Queue', () => {
  it('enqueue', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.toString()).toBe('1,2,3');
  });

  it('dequeue', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
    expect(queue.dequeue()).toBe(undefined);
  });

  it('front', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.front()).toBe(1);

    queue.dequeue();

    expect(queue.front()).toBe(2);

    queue.dequeue();

    expect(queue.front()).toBe(3);

    queue.dequeue();

    expect(queue.front()).toBe(undefined);
  });

  it('isEmpty', () => {
    const queue = new Queue();

    expect(queue.isEmpty()).toBe(true);

    queue.enqueue(1);

    expect(queue.isEmpty()).toBe(false);
  });

  it('clear', () => {
    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);

    queue.clear();

    expect(queue.isEmpty()).toBe(true);
  });

  it('size', () => {
    const queue = new Queue();

    expect(queue.size()).toBe(0);

    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.size()).toBe(2);

    queue.dequeue();

    expect(queue.size()).toBe(1);
  });

  it('toString', () => {
    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.toString()).toBe('1,2,3');
  });

  it('should be possible to enqueue/dequeue objects', () => {
    const queue = new Queue();

    queue.enqueue({ value: 'test1', key: 'key1' });
    queue.enqueue({ value: 'test2', key: 'key2' });

    expect(queue.dequeue().value).toBe('test1');
    expect(queue.dequeue().value).toBe('test2');
  });
});
