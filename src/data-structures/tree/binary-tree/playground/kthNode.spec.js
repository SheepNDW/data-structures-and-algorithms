import { describe, expect, it } from 'vitest';
import { kthNode, kthNode2 } from './kthNode';

const root = {
  data: 5,
  left: {
    data: 3,
    left: {
      data: 2,
      left: null,
      right: null,
    },
    right: {
      data: 4,
      left: null,
      right: null,
    },
  },
  right: {
    data: 7,
    left: null,
    right: null,
  },
};

describe('kthNode', () => {
  describe('approach 1', () => {
    it('should return the kth node', () => {
      const node = kthNode(root, 2);

      expect(node.data).toBe(3);
    });
  });

  describe('approach 2', () => {
    it('should return the kth node', () => {
      const node = kthNode2(root, 2);

      expect(node.data).toBe(3);
    });
  });
});
