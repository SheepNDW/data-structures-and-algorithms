import { DoublyList, DoublyNode } from '../doubly-linked-list/DoublyLinkedList';

export class CircularLink extends DoublyList {
  forEach(cb) {
    let current = this.head;
    let first = current;
    let i = 0;
    while (current) {
      cb(current.element, i);
      current = current.next;
      if (current === first) {
        break;
      }
      i++;
    }
  }

  findIndex(index) {
    const n = this.length;
    if (index > n) {
      return null;
    }
    // 判斷尋找方向
    const dir = index > n >> 1;
    let current = dir ? this.head.prev : this.head;
    let first = current;
    let prop = dir ? 'prev' : 'next';
    let add = dir ? -1 : 1;
    let i = dir ? n - 1 : 0;

    while (current) {
      if (index === i) {
        return current;
      }
      current = current[prop];
      if (current === first) {
        return current;
      }
      i += add;
    }

    return null;
  }

  insertAt(index, element) {
    if (index <= this.length) {
      const node = new DoublyNode(element);

      if (index === 0 && !this.head) {
        this.head = node;
        node.prev = node;
        node.next = node;
      } else {
        let prev = this.findIndex(index - 1);
        let next = prev.next;

        prev.next = node;
        node.prev = prev;
        node.next = next;
        next.prev = node;
      }

      this.length++;
    }
  }

  removeAt(index) {
    const node = this.findIndex(index);
    if (node) {
      if (node.next === node) {
        this.head = null;
      } else {
        let prev = node.prev;
        let next = node.next;
        prev.next = next;
        next.prev = prev;

        if (node === this.head) {
          this.head = next;
        }
      }
      this.length--;
      return true;
    }
    return false;
  }
}
