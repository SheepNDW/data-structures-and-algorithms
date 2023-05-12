import { describe, expect, it } from 'vitest';
import { MaxHeap } from './MaxHeap';

describe('MaxHeap', () => {
  it('should create an empty max heap', () => {
    const heap = new MaxHeap();

    expect(heap).toBeDefined();
    expect(heap.peek()).toBeNull();
    expect(heap.isEmpty()).toBe(true);
  });

  it('should add items to the heap and heapify it up', () => {
    const heap = new MaxHeap();

    heap.insert(5);
    expect(heap.isEmpty()).toBe(false);
    expect(heap.peek()).toBe(5);
    expect(heap.toString()).toBe('5');

    heap.insert(3);
    expect(heap.peek()).toBe(5);
    expect(heap.toString()).toBe('5,3');

    heap.insert(10);
    expect(heap.peek()).toBe(10);
    expect(heap.toString()).toBe('10,3,5');

    heap.insert(1);
    expect(heap.peek()).toBe(10);
    expect(heap.toString()).toBe('10,3,5,1');

    heap.insert(1);
    expect(heap.peek()).toBe(10);
    expect(heap.toString()).toBe('10,3,5,1,1');
  });

  it('should extract items from the heap and heapify it down', () => {
    const heap = new MaxHeap();

    heap.insert(5);
    heap.insert(3);
    heap.insert(10);
    heap.insert(11);
    heap.insert(1);

    expect(heap.toString()).toBe('11,10,5,3,1');

    expect(heap.extract()).toBe(11);
    expect(heap.toString()).toBe('10,3,5,1');

    expect(heap.extract()).toBe(10);
    expect(heap.toString()).toBe('5,3,1');

    expect(heap.extract()).toBe(5);
    expect(heap.toString()).toBe('3,1');

    expect(heap.extract()).toBe(3);
    expect(heap.toString()).toBe('1');

    expect(heap.extract()).toBe(1);
    expect(heap.toString()).toBe('');

    expect(heap.extract()).toBeNull();
    expect(heap.toString()).toBe('');
  });
});
