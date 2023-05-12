import { LinkedList, Node } from '../linked-list/LinkedList';

class DoublyNode extends Node {
  constructor(element) {
    super(element);
    /** @type {DoublyNode | null} */
    this.prev = null;
  }
}

export class DoublyLinkedList extends LinkedList {
  constructor() {
    super();
    /** @type {DoublyNode | null} */
    this.tail = null;
  }

  push(element) {
    const node = new DoublyNode(element);

    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    this.length++;
  }

  insert(index, element) {
    if (index >= 0 && index <= this.length) {
      const node = new DoublyNode(element);
      let current = this.head;

      if (index === 0) {
        // insert at the beginning
        if (this.head === null) {
          this.head = node;
          this.tail = node;
        } else {
          node.next = this.head;
          this.head.prev = node;
          this.head = node;
        }
      } else if (index === this.length) {
        // insert at the end
        current = this.tail;
        current.next = node;
        node.prev = current;
        this.tail = node;
      } else {
        // insert at the middle
        const previous = this.getNodeAt(index - 1);
        current = previous.next;

        node.next = current;
        current.prev = node;

        previous.next = node;
        node.prev = previous;
      }

      this.length++;
      return true;
    }

    return false;
  }

  removeAt(index) {
    if (index >= 0 && index < this.length) {
      let current = this.head;
      if (index === 0) {
        this.head = current.next;
        if (this.length === 1) {
          this.tail = null;
        } else {
          this.head.prev = null;
        }
      } else if (index === this.length - 1) {
        current = this.tail;
        this.tail = current.prev;
        this.tail.next = null;
      } else {
        let previous = this.getNodeAt(index - 1);
        current = previous.next;
        previous.next = current.next;
        current.next.prev = previous;
      }

      this.length--;
      return current.element;
    }

    return null;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }
}
