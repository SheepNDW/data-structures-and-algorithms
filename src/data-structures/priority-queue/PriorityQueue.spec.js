import { describe, expect, it } from 'vitest';
import { PriorityQueue, MinPriorityQueue } from './PriorityQueue';

describe('MaxPriorityQueue', () => {
  it('should create empty priority queue', () => {
    const pq = new PriorityQueue();

    expect(pq.peek()).toBeUndefined();
    expect(pq.isEmpty()).toBe(true);
  });

  it('should enqueue items to the queue in the correct order', () => {
    const pq = new PriorityQueue();
    pq.push(1);
    pq.push(13);
    pq.push(4);
    pq.push(20);
    pq.push(3);

    expect(pq.toString()).toBe('20,13,4,1,3');

    pq.push(30);

    expect(pq.toString()).toBe('30,13,20,1,3,4');

    pq.push(35);

    expect(pq.peek()).toBe(35);
  });

  it('should dequeue items from the queue in correct order', () => {
    const pq = new PriorityQueue();
    pq.push(1);
    pq.push(13);
    pq.push(4);
    pq.push(20);
    pq.push(3);

    expect(pq.pop()).toBe(20);
    expect(pq.peek()).toBe(13);

    expect(pq.pop()).toBe(13);
    expect(pq.peek()).toBe(4);

    expect(pq.pop(1)).toBe(1);
    expect(pq.peek()).toBe(4);
  });
});

describe('MinPriorityQueue', () => {
  it('should create empty priority queue', () => {
    const pq = new MinPriorityQueue();

    expect(pq.peek()).toBeUndefined();
    expect(pq.isEmpty()).toBe(true);
  });

  it('should enqueue items to the queue in the correct order', () => {
    const pq = new MinPriorityQueue();
    pq.push(1);
    pq.push(13);
    pq.push(4);
    pq.push(20);
    pq.push(3);

    expect(pq.toString()).toBe('1,3,4,20,13');

    pq.push(30);

    expect(pq.toString()).toBe('1,3,4,20,13,30');

    pq.push(35);

    expect(pq.peek()).toBe(1);
  });

  it('should dequeue items from the queue in correct order', () => {
    const pq = new MinPriorityQueue();
    pq.push(1);
    pq.push(13);
    pq.push(4);
    pq.push(20);
    pq.push(3);

    expect(pq.pop()).toBe(1);
    expect(pq.peek()).toBe(3);

    expect(pq.pop()).toBe(3);
    expect(pq.peek()).toBe(4);

    expect(pq.pop(1)).toBe(4);
    expect(pq.peek()).toBe(13);
  });
});
