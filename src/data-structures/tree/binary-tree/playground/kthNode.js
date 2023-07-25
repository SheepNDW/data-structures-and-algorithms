/**
 * 從二元搜尋樹中找出第 k 大的節點
 */
export function kthNode(root, k) {
  if (!root || k < 0) {
    return null;
  }

  const array = [];
  inOrder(root, array);
  if (k > array.length) {
    return null;
  }
  return array[k - 1];
}

function inOrder(root, array) {
  if (root === null) {
    return;
  }
  inOrder(root.left, array);
  array.push(root);
  inOrder(root.right, array);
}

export function kthNode2(root, k) {
  let index = 0;
  const _kthNode = (root, k) => {
    if (root) {
      let node = _kthNode(root.left, k);
      if (node !== null) {
        return node;
      }
      index++;
      if (index === k) {
        return root;
      }
      node = _kthNode(root.right, k);
      if (node !== null) {
        return node;
      }
    }
    return null;
  };
  return _kthNode(root, k);
}
