/**
 * Get the postorder traversal of a binary tree from its preorder and inorder traversal.
 * @param {string[]} preorder
 * @param {string[]} inorder
 */
function getPostorder(preorder, inorder, postorder = []) {
  const root = preorder[0];
  const inLeftTree = [];
  const inRightTree = [];
  let list = inLeftTree;

  // 分離出 inorder 的左右子樹
  for (let i = 0; i < inorder.length; i++) {
    if (inorder[i] === root) {
      list = inRightTree;
    } else {
      list.push(inorder[i]); // 根節點不會放在兩個子樹中
    }
  }

  const boundary = inLeftTree.length;
  const preLeftTree = [];
  const preRightTree = [];

  // 分離出 preorder 的左右子樹
  for (let i = 1; i < preorder.length; i++) {
    const el = preorder[i];
    if (preLeftTree.length < boundary) {
      preLeftTree.push(el);
    } else {
      preRightTree.push(el);
    }
  }

  // postorder 左子樹遞迴
  if (preLeftTree.length > 0) {
    getPostorder(preLeftTree, inLeftTree, postorder);
  }

  // postorder 右子樹遞迴
  if (preRightTree.length > 0) {
    getPostorder(preRightTree, inRightTree, postorder);
  }

  // postorder 處理根節點
  if (root) {
    postorder.push(root);
  }

  return postorder;
}

export { getPostorder };
