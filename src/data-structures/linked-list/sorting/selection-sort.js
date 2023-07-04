/**
 * selection sort linked list implementation
 * @param {import('../doubly-linked-list/DoublyLinkedList').DoublyList} list
 */
function selectSort(list) {
  let head = list.head;
  if (!head || !head.next) {
    return;
  }
  let firstSorted, lastSorted, minPrev, min, p;
  while (head) {
    // 1. 在 linked list 中找到最小的節點
    for (p = head, min = head; p.next; p = p.next) {
      if (p.next.element < min.element) {
        minPrev = p;
        min = p.next;
      }
    }
    // 2. 建構有序 linked list
    if (!firstSorted) {
      firstSorted = min; // 如果目前還是空的，就設置為第一個節點
    } else {
      lastSorted.next = min; // 否則就把最小的節點接在上一個已排序節點的後面
    }
    // 3. 調整 lastSorted
    lastSorted = min;
    // 4. 將 min 從原本的 linked list 中移除
    if (min == head) {
      head = head.next;
    } else {
      minPrev.next = min.next; // 移除
    }
  }
  if (lastSorted) {
    lastSorted.next = null; // 清空最後節點的 next
  }
  list.head = firstSorted;
  list.tail = lastSorted;
}

export { selectSort };
