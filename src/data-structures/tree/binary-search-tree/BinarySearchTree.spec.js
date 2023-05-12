import { describe, expect, it } from 'vitest';
import { BinarySearchTree } from './BinarySearchTree';

describe('BinarySearchTree', () => {
  it('should create binary search tree', () => {
    const bst = new BinarySearchTree();

    expect(bst).toBeDefined();
    expect(bst.root).toBeNull();
  });

  it('should insert values', () => {
    const bst = new BinarySearchTree();

    bst.insert(1);
    bst.insert(2);

    expect(bst.root.key).toBe(1);
    expect(bst.root.right.key).toBe(2);
    expect(bst.root.left).toBeNull();

    bst.insert(3);

    expect(bst.root.right.right.key).toBe(3);
    expect(bst.root.right.left).toBeNull();
  });

  it('should check if value exists', () => {
    const bst = new BinarySearchTree();

    bst.insert(1);
    bst.insert(2);
    bst.insert(3);

    expect(bst.search(1)).toBeTruthy();
    expect(bst.search(2)).toBeTruthy();
    expect(bst.search(3)).toBeTruthy();
    expect(bst.search(4)).toBeFalsy();
  });

  it('should in-order traverse tree', () => {
    const bst = new BinarySearchTree();

    bst.insert(2);
    bst.insert(1);
    bst.insert(3);

    const result = [];
    bst.inOrderTraverse((value) => result.push(value));

    expect(result).toEqual([1, 2, 3]);
  });

  it('should pre-order traverse tree', () => {
    const bst = new BinarySearchTree();

    bst.insert(2);
    bst.insert(1);
    bst.insert(3);

    const result = [];
    bst.preOrderTraverse((value) => result.push(value));

    expect(result).toEqual([2, 1, 3]);
  });

  it('should post-order traverse tree', () => {
    const bst = new BinarySearchTree();

    bst.insert(2);
    bst.insert(1);
    bst.insert(3);

    const result = [];
    bst.postOrderTraverse((value) => result.push(value));

    expect(result).toEqual([1, 3, 2]);
  });

  it('should find min node', () => {
    const bst = new BinarySearchTree();

    bst.insert(2);
    bst.insert(1);
    bst.insert(3);

    const minValue = bst.min().key;

    expect(minValue).toBe(1);
  });

  it('should find max node', () => {
    const bst = new BinarySearchTree();

    bst.insert(2);
    bst.insert(1);
    bst.insert(3);

    const maxValue = bst.max().key;

    expect(maxValue).toBe(3);
  });

  it('should remove leaf nodes', () => {
    const bst = new BinarySearchTree();

    bst.insert(11);
    bst.insert(7);
    bst.insert(5);
    bst.insert(9);
    bst.insert(15);
    bst.insert(13);
    bst.insert(20);

    bst.remove(5);

    expect(bst.root.left.left).toBeNull();
    expect(bst.root.left.right.key).toBe(9);

    bst.remove(20);

    expect(bst.root.right.right).toBeNull();
    expect(bst.root.right.left.key).toBe(13);
  });

  it('should remove nodes with one child', () => {
    const bst = new BinarySearchTree();

    bst.insert(11);
    bst.insert(7);
    bst.insert(5);
    bst.insert(3);
    bst.insert(9);
    bst.insert(15);
    bst.insert(13);
    bst.insert(20);

    bst.remove(5);

    expect(bst.root.left.left.key).toBe(3);
    expect(bst.root.left.right.key).toBe(9);
  });

  it('should remove nodes with two children', () => {
    const bst = new BinarySearchTree();

    bst.insert(11);
    bst.insert(7);
    bst.insert(3);
    bst.insert(9);
    bst.insert(15);
    bst.insert(13);
    bst.insert(20);
    bst.insert(12);
    bst.insert(14);
    bst.insert(18);
    bst.insert(25);

    bst.remove(15);

    expect(bst.root.right.key).toBe(18);
    expect(bst.root.right.right.key).toBe(20);
    expect(bst.root.right.right.left).toBeNull();
  });
});
