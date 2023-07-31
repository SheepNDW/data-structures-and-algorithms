import { describe, expect, it } from 'vitest';
import { BST } from './BST';

describe('BST', () => {
  it('should insert data correctly', () => {
    const bst = new BST();
    String('7,15,5,3,9,8,10,13,20,18,25')
      .split(',')
      .forEach((item) => bst.insert(+item));

    const result = [];
    bst.inOrder((node) => result.push(node.data));

    expect(result).toEqual([3, 5, 7, 8, 9, 10, 13, 15, 18, 20, 25]);
  });

  it('should find data correctly', () => {
    const bst = new BST();
    String('7,15,5,3,9,8,10,13,20,18,25')
      .split(',')
      .forEach((item) => bst.insert(+item));

    const node = bst.find(13);

    expect(node.data).toBe(13);
  });

  it('should remove data correctly', () => {
    const bst = new BST();
    String('7,15,5,3,9,8,10,13,20,18,25')
      .split(',')
      .forEach((item) => bst.insert(+item));

    bst.remove(15);

    const result = [];
    bst.inOrder((node) => result.push(node.data));

    expect(result).toEqual([3, 5, 7, 8, 9, 10, 13, 18, 20, 25]);
  });
});
