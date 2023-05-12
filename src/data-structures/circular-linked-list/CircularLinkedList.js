import { LinkedList, Node } from '../linked-list/LinkedList';

export class CircularLinkedList extends LinkedList {
  constructor() {
    super();
  }

  push(element) {
    const node = new Node(element);
    let current;

    if (this.head === null) {
      this.head = node;
    } else {
      current = this.getNodeAt(this.size() - 1);
      current.next = node;
    }

    node.next = this.head;
    this.length++;
  }

  insert(index, element) {
    if (index >= 0 && index <= this.length) {
      const node = new Node(element);
      let current = this.head;

      if (index === 0) {
        if (this.head === null) {
          this.head = node;
          node.next = this.head;
        } else {
          node.next = current;
          current = this.getNodeAt(this.size() - 1);
          this.head = node;
          current.next = this.head;
        }
      } else {
        const previous = this.getNodeAt(index - 1);
        node.next = previous.next;
        previous.next = node;
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
        if (this.size() === 1) {
          this.head = null;
        } else {
          let lastNode = this.getNodeAt(this.size() - 1);
          this.head = this.head.next;
          lastNode.next = this.head;
        }
      } else {
        const previous = this.getNodeAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }

      this.length--;
      return current.element;
    }
    return null;
  }
}
