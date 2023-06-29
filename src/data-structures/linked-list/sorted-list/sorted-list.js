import { DoublyList, DoublyNode } from '../doubly-linked-list/DoublyLinkedList';

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
