import { describe, expect, it } from 'vitest';
import { Stack } from './Stack';

describe('Stack', () => {
  it('push', () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.toString()).toEqual('1,2,3');
  });

  it('pop', () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBe(undefined);
  });

  it('peek', () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.peek()).toBe(3);

    stack.pop();

    expect(stack.peek()).toBe(2);

    stack.pop();

    expect(stack.peek()).toBe(1);

    stack.pop();

    expect(stack.peek()).toBe(undefined);
  });

  it('isEmpty', () => {
    const stack = new Stack();

    expect(stack.isEmpty()).toBe(true);

    stack.push(1);

    expect(stack.isEmpty()).toBe(false);
  });

  it('clear', () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.clear();

    expect(stack.isEmpty()).toBe(true);
  });

  it('size', () => {
    const stack = new Stack();

    expect(stack.size()).toBe(0);

    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.size()).toBe(3);

    stack.clear();

    expect(stack.size()).toBe(0);
  });

  it('toString', () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.toString()).toBe('1,2,3');
  });
});
