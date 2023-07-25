import { describe, expect, it } from 'vitest';
import { getPostorder } from './getPostorder';

describe('getPostorder', () => {
  it('should return the postorder traversal of a binary tree', () => {
    const preorder = 'GDAFEMHZ'.split('');
    const inorder = 'ADEFGHMZ'.split('');

    const postorder = getPostorder(preorder, inorder);

    expect(postorder).toEqual('AEFDHZMG'.split(''));
  });
});
