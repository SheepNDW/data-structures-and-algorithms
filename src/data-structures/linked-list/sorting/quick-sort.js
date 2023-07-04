import { DoublyNode } from '../doubly-linked-list/DoublyLinkedList';

/**
 * Quick sort algorithm linked list implementation
 * @param {import('../doubly-linked-list/DoublyLinkedList').DoublyList} list
 */
function quickSort(list) {
  let head = list.head;
  if (!head || !head.next) {
    return;
  }
  let tempHead = new DoublyNode(0);
  tempHead.next = head;
  recursion(tempHead, head, null);
  let h = (list.head = tempHead.next);
  while (h) {
    list.tail = h;
    h = h.next;
  }
}

function recursion(prevHead, head, tail) {
  // linked list 的範圍是 [low, high]
  if (head != tail && head.next != tail) {
    const mid = partition(prevHead, head, tail); // 注意這裡的 head 可能不再指向 list 的 head
    recursion(prevHead, prevHead.next, mid);
    recursion(mid, mid.next, tail);
  }
}

function partition(prevLow, low, high) {
  let pivotKey = low.element; // low 為 pivot
  let little = new DoublyNode('');
  let bigger = new DoublyNode('');
  let littleHead = little; // 記錄原本的引用
  let biggerHead = bigger; // 記錄原本的引用

  for (let node = low.next; node != high; node = node.next) {
    if (node.element < pivotKey) {
      little.next = node;
      little = node;
    } else {
      bigger.next = node;
      bigger = node;
    }
  }
  // [prevLow littleHead ... low biggerHead ... big high]
  bigger.next = high;
  little.next = low;
  low.next = biggerHead.next; // 去掉 biggerHead
  prevLow.next = littleHead.next; // 去掉 littleHead
  return low;
}

// ==== Alternative implementation ====

// function quickSort(head) {
//   if (!head && !head.next) {
//     return;
//   }

//   let prevHead = new DoublyNode(0);
//   prevHead.next = head;
//   recursion(prevHead, null);
//   return prevHead.next;
// }

// function recursion(start, end) {
//   if (start.next !== end) {
//     const [prevPivot, pivot] = partition(start, end);
//     recursion(start, prevPivot);
//     recursion(pivot, end);
//   }
// }

// function partition(prevHead, end) {
//   let second = prevHead.next.next; // 第二個元素
//   let prevPivot = prevHead.next; // 第一個元素
//   prevPivot.next = end; // 將第二個元素移出來
//   let pivot = prevPivot; // prevPivot
//   // [prevHead,..., prevPivot, pivot,..., end]
//   while (second !== end) {
//     let next = second.next;
//     if (second.element >= prevPivot.element) {
//       // 如果第二個元素比第一個大，第一個元素為 prevPivot
//       // 那麼將它移動到 pivot 後面
//       // pivot -> second -> pivot.next
//       second.next = pivot.next;
//       pivot.next = second;
//       if (second.element === prevPivot.element) {
//         // 如果第二個元素和第一個元素相等，那麼 pivot 往後移動
//         pivot = pivot.next;
//       }
//     } else if (second.element < prevPivot.element) {
//       // 將它移動到 prevPivot 前面，prevHead 的右側
//       // prevHead -> second -> prevHead.next
//       second.next = prevHead.next;
//       prevHead.next = second;
//     }
//     second = next;
//   }
//   return [prevPivot, pivot];
// }

export { quickSort };
