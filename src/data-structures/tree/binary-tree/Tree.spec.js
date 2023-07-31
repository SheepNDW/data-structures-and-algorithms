import { describe, expect, it } from 'vitest';
import { Tree } from './Tree';

describe('Binary Tree', () => {
  it('insert: should insert nodes properly', () => {
    const tree = new Tree();

    tree.insert(5);
    tree.insert(3);
    tree.insert(7);

    expect(tree.root.data).toBe(5);
    expect(tree.root.left.data).toBe(3);
    expect(tree.root.right.data).toBe(7);
  });

  it('find: should find a node with the given data', () => {
    const tree = new Tree();
    tree.insert(5);
    tree.insert(3);
    tree.insert(7);

    const foundNode = tree.find(3);

    expect(foundNode.data).toBe(3);
  });

  it('remove: should remove a node with the given data', () => {
    const tree = new Tree();
    tree.insert(5);
    tree.insert(3);
    tree.insert(7);

    tree.remove(3);
    const foundNode = tree.find(3);

    expect(foundNode).toBeNull();
    expect(tree.size()).toBe(2);
  });

  it('min: should return the minimum value in the tree', () => {
    const tree = new Tree();
    tree.insert(5);
    tree.insert(3);
    tree.insert(7);

    const minValue = tree.min();

    expect(minValue).toBe(3);
  });

  it('max: should return the maximum value in the tree', () => {
    const tree = new Tree();
    tree.insert(5);
    tree.insert(3);
    tree.insert(7);

    const maxValue = tree.max();

    expect(maxValue).toBe(7);
  });

  it('size: should return the size of the tree', () => {
    const tree = new Tree();
    tree.insert(5);
    tree.insert(3);
    tree.insert(7);

    const size = tree.size();

    expect(size).toBe(3);
  });

  it('height: should return the height of the tree', () => {
    const tree = new Tree();
    tree.insert(5);
    tree.insert(3);
    tree.insert(7);

    const height = tree.height();

    expect(height).toBe(2);
  });

  it('preOrder: should traverse in pre-order', () => {
    const tree = new Tree();
    tree.insert(5);
    tree.insert(3);
    tree.insert(7);
    const expectedTraversal = [5, 3, 7];
    const traversal = [];

    tree.preOrder((node) => traversal.push(node.data));

    expect(traversal).toEqual(expectedTraversal);
  });

  it('inOrder: should traverse in in-order', () => {
    const tree = new Tree();
    tree.insert(5);
    tree.insert(3);
    tree.insert(7);
    const expectedTraversal = [3, 5, 7];
    const traversal = [];

    tree.inOrder((node) => traversal.push(node.data));

    expect(traversal).toEqual(expectedTraversal);
  });

  it('postOrder: should traverse in post-order', () => {
    const tree = new Tree();
    tree.insert(5);
    tree.insert(3);
    tree.insert(7);
    const expectedTraversal = [3, 7, 5];
    const traversal = [];

    tree.postOrder((node) => traversal.push(node.data));

    expect(traversal).toEqual(expectedTraversal);
  });

  it('levelOrder: should traverse in level-order', () => {
    const tree = new Tree();
    tree.insert(5);
    tree.insert(3);
    tree.insert(7);

    const expectedTraversal = [5, 3, 7];
    const traversal = [];

    tree.levelOrder((node) => traversal.push(node.data));

    expect(traversal).toEqual(expectedTraversal);
  });
});
