import { DoublyNode } from '../doubly-linked-list/DoublyLinkedList';

/**
 * bubble sort linked list implementation
 * @param {import('../doubly-linked-list/DoublyLinkedList').DoublyList} list
 */
function bubbleSort(list) {
  let head = list.head;
  if (!head || !head.next) {
    // 如果沒有或只有一個節點，不用排序
    return;
  }
  let smallest = new DoublyNode(Number.MIN_VALUE);
  smallest.next = head;
  list.tail = null; // 準備重置 tail
  let len = 0;
  let h = smallest;
  while (h.next) {
    len++;
    h = h.next;
  }

  let k = len - 1;
  let swapPos = 0;
  for (let i = 1; i < len; i++) {
    let hasSort = true;
    let h = smallest;
    let p1 = h.next;
    let p2 = p1.next;
    for (let j = 0; j < k; j++) {
      if (p1.element > p2.element) {
        h.next = p2;
        p1.next = p2.next;
        p2.next = p1;
        hasSort = false;
        swapPos = j;
      }
      h = h.next;
      p1 = h.next;
      p2 = p1.next;
    }
    k = swapPos;
    // 第一次氣泡排序結束後，p1 的位置就是 tail（p2 已是 null）
    if (!list.tail) {
      list.tail = p1;
    }
    if (hasSort) {
      break;
    }
  }
  // 重置新的 head
  list.head = smallest.next;
}

export { bubbleSort };
