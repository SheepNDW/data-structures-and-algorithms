/**
 * @template T
 * @type {import('./DoublyLinkedList').DoublyNode<T>}
 */
export class DoublyNode {
  constructor(element) {
    this.element = element;
    this.next = null;
    this.prev = null;
  }
}

export class DoublyList {
  constructor() {
    /** @type {DoublyNode | null} */
    this.head = null;
    /** @type {DoublyNode | null} */
    this.tail = null;
    this.length = 0;
  }

  size() {
    return this.length;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  isEmpty() {
    return this.size() === 0;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  findIndex(index) {
    const n = this.length;
    if (index > n) {
      throw `Index ${index} is greater than list size ${n}`;
    }
    // 判斷查詢方向
    const dir = index > n >> 1;
    let current = dir ? this.tail : this.head;
    let prop = dir ? 'prev' : 'next';
    let add = dir ? -1 : 1;
    let i = dir ? n - 1 : 0;
    while (current) {
      if (index === i) {
        return current;
      }
      current = current[prop];
      i = i + add;
    }
    return null;
  }

  forEach(cb) {
    let current = this.head;
    let i = 0;
    while (current) {
      cb(current.element, i);
      current = current.next;
      i++;
    }
  }

  insertAt(index, element) {
    if (index <= this.length) {
      let node = new DoublyNode(element);

      if (index === 0 && !this.head) {
        this.tail = this.head = node;
      } else {
        let prev = this.findIndex(index - 1);
        if (!prev) {
          // 前面節點不存在，說明插入的是第一個節點，把 head 指向新節點
          node.next = this.head;
          this.head.prev = node;
          this.head = node;
        } else {
          let curr = prev.next; // curr 如果不存在代表從尾部插入
          prev.next = node;
          node.prev = prev;

          node.next = curr;
          if (curr) {
            curr.prev = node;
          }
        }
      }

      if (index === this.length) {
        this.tail = node;
      }

      this.length++;
    } else {
      throw `Index ${index} is greater than list size ${this.length}`;
    }
  }

  removeAt(index) {
    if (this.head && index < this.length) {
      let prev = this.findIndex(index - 1);
      let curr = this.findIndex(index);
      let next = curr.next;

      if (!prev) {
        // 前面節點不存在，說明移除的是第一個節點，把 head 指向下一個節點
        this.head = next;
      } else {
        prev.next = next;
      }

      if (next) {
        // 如果 next 存在，說明移除的不是最後一個節點，把 next 的 prev 指向 prev
        next.prev = prev;
      } else {
        // 如果 next 不存在，說明移除的是最後一個節點，把 tail 指向 prev
        this.tail = prev;
      }

      this.length--;
      return curr.element;
    }

    return null;
  }
}
