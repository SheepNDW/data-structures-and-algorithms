import { CircularLink } from './CircularLinkedList';

/**
 * 約瑟夫問題
 * @param {number} n - 總人數
 * @param {number} m - 每次數到的數字
 */
function josephus(n, m) {
  const list = new CircularLink();
  for (let i = 0; i < n; i++) {
    list.insertAt(i, i + 1);
  }
  kill(list, list.head, m);

  return list.head.element;
}

/**
 * @param {CircularLink} list
 * @param {import('../doubly-linked-list/DoublyLinkedList').DoublyNode} node
 * @param {number} m
 */
function kill(list, node, m) {
  let i = 1;
  while (i <= m) {
    if (i === m) {
      if (node.next === node) {
        // 只剩最後一個
        console.log('最後一個', node.element);
        return true;
      }
      let prev = node.prev;
      let next = node.next;
      prev.next = next;
      next.prev = prev;
      list.length--;

      if (node === list.head) {
        list.head = next;
      }
      console.log('出局', node.element);
    }
    i++;
    node = node.next;
  }
  kill(list, node, m);
}

export { josephus };
