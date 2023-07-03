/**
 * Insertion sort linked list implementation
 * @param {import('../doubly-linked-list/DoublyLinkedList').DoublyList} list
 */
function insertSort(list) {
  let head = list.head;
  // 如果沒有或只有一個節點，直接 return
  if (!head || !head.next) {
    return;
  }

  let lastSorted = head; // 已排序的最後一個節點
  while (lastSorted.next) {
    // 如果還有下一個節點
    let firstUnsort = lastSorted.next; // 未排序的第一個節點
    if (lastSorted.element > firstUnsort.element) {
      // 已排序的最前一個
      let firstSorted = head;
      let prev = null;
      // 將 firstUnsort 拿出來
      lastSorted.next = firstUnsort.next;
      // 求出 firstUnsort 應該插入的位置，讓它在已排序的區域中逐一比較
      while (firstSorted.element < firstUnsort.element) {
        prev = firstSorted;
        firstSorted = firstSorted.next;
      }
      if (!prev) {
        // 如果 prev 為 null，代表 firstUnsort 應該插入在 head 之前
        firstUnsort.next = head;
        head = firstUnsort;
      } else {
        prev.next = firstUnsort;
        firstUnsort.next = firstSorted;
      }
    } else {
      // firstUnsort 剛好比 lastSorted 大
      lastSorted = lastSorted.next;
    }
  }
  // 修正首尾節點
  list.head = head;
  list.tail = lastSorted;
}

export { insertSort };
