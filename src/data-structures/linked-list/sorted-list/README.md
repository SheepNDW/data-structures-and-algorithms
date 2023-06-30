## 有序的鏈結串列 Sorted Linked List

有序鏈結串列跟前面兩種鏈結串列相比，就是在插入節點時，保證資料是有序的。陣列在向中間插入、移除資料時，其中一側的資料都要往後或向前移動，但鏈結串列就不需要煩惱這個。

有序鏈結串列的許多功能與單向鏈結串列和雙向鏈結串列相同，沒有必要再寫一次，直接用繼承的方式就可以了，然後在原類別的基礎上新增 3 個方法：`find`、`insert`、`value`。其中 `find` 方法需要一點技巧，因為插入時，我們只能插入到比目標值大的節點前面，不能使用等於，而在移除時，我們又想準確刪除 data 等於 value 的節點，因此設置了第 2 個參數 `useByInsert` 進行區分。但為了防止使用者誤傳一個參數，我們可以傳入一個唯一的 flag 進行比較。

實作程式碼如下：

```js
const useByInsert = Symbol('useByInsert');

export class SortedList extends DoublyList {
  find(value, second) {
    let current = this.head;
    let i = 0;
    while (current) {
      if (second === useByInsert ? current.element > value : current.element === value) {
        return current;
      }
      current = current.next;
      i++;
    }
  }

  insert(value) {
    let next = this.find(value, useByInsert);
    let node = new DoublyNode(value);
    if (!next) {
      let last = this.tail;
      // 如果沒有節點比它大，它就是 tail
      this.tail = node;
      if (last) {
        // append
        last.next = node;
        node.prev = last;
      } else {
        // 什麼也沒有，它就是 head
        this.head = node;
      }
    } else {
      let prev = next.prev;
      if (!prev) {
        this.head = node;
        this.head.next = next;
      } else {
        prev.next = node;
        node.prev = prev;
      }
      node.next = next;
      next.prev = node;
    }
    this.length++;
  }

  remove(value) {
    let node = this.find(value);
    if (node) {
      let prev = node.prev;
      let next = node.next;

      if (!prev) {
        this.head = next;
      } else {
        prev.next = next;
      }

      if (next) {
        next.prev = prev;
      } else {
        this.tail = prev;
      }

      this.length--;
      return true;
    }
    return false;
  }
}
```
