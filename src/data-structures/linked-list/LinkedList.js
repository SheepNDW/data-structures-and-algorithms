/** @type {import('./LinkedList').Node} */
export class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

export class LinkedList {
  constructor() {
    /** @type {Node | null} */
    this.head = null;
    this.length = 0;
  }
  /**
   * @param {any} element
   * @description Adds a new element to the end of the list.
   */
  push(element) {
    const node = new Node(element);

    // if head is null, then the list is empty
    if (this.head === null) {
      this.head = node;
    } else {
      // if the list is not empty, then find the last node
      let current = this.head;

      while (current.next !== null) {
        current = current.next;
      }

      current.next = node;
    }

    this.length++;
  }
  /**
   * @param {number} index
   * @returns {Node | null}
   * @description Removes the element at the specified position in this list.
   */
  removeAt(index) {
    if (index < 0 || index >= this.length) return null;
    let current = this.head;

    if (index === 0) {
      this.head = this.head.next;
    } else {
      // let previous = null;
      // for (let i = 0; i < index; i++) {
      //   previous = current;
      //   current = current.next;
      // }
      let previous = this.getNodeAt(index - 1);
      current = previous.next;
      previous.next = current.next;
    }

    this.length--;
    return current.element;
  }
  /**
   * @param {number} index
   * @returns {Node | null}
   * @description Returns the element at the specified position in this list.
   */
  getNodeAt(index) {
    if (index < 0 || index >= this.length) return null;
    let node = this.head;

    for (let i = 0; i < index; i++) {
      node = node.next;
    }

    return node;
  }

  equalFn(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
  }
  /**
   * @param {any} element
   * @returns {number}
   * @description Returns the index of the first occurrence of the specified element in this list, or -1 if this list does not contain the element.
   */
  indexOf(element) {
    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      if (this.equalFn(element, current.element)) return i;
      current = current.next;
    }

    return -1;
  }
  /**
   * @param {any} element
   * @returns {Node | null}
   * @description Removes the first occurrence of the specified element from this list, if it is present.
   * If the list does not contain the element, it is unchanged.
   */
  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }
  /**
   * @param {number} index
   * @param {any} element
   * @returns {boolean}
   * @description Inserts the specified element at the specified position in this list.
   */
  insert(index, element) {
    if (index >= 0 && index <= this.length) {
      const node = new Node(element);

      if (index === 0) {
        const current = this.head;
        node.next = current;
        this.head = node;
      } else {
        const previous = this.getNodeAt(index - 1);
        const current = previous.next;

        node.next = current;
        previous.next = node;
      }

      this.length++;
      return true;
    }

    return false;
  }

  size() {
    return this.length;
  }

  isEmpty() {
    return this.size() === 0;
  }
}

// ==== Alternative Implementation ====

/** @type {import('./LinkedList').List} */
export class List {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  size() {
    return this.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  clear() {
    this.head = null;
    this.length = 0;
  }

  forEach(cb) {
    let current = this.head;
    let index = 0;
    while (current) {
      cb(current.element, index++);
      current = current.next;
    }
  }

  findIndex(index) {
    let current = this.head;
    let i = 0;
    while (current) {
      if (index === i) {
        return current;
      }
      current = current.next;
      i++;
    }
    return null;
  }

  insertAt(index, element) {
    if (index >= 0 && index <= this.length) {
      const node = new Node(element);
      if (index === 0) {
        const current = this.head;
        node.next = current;
        this.head = node;
      } else {
        const prev = this.findIndex(index - 1);
        node.next = prev.next;
        prev.next = node;
      }
      this.length++;
    } else {
      throw `${index} 超過 list 長度 ${this.length}`;
    }
  }

  removeAt(index) {
    if (this.head && index >= 0 && index < this.length) {
      const prev = this.findIndex(index - 1);
      const current = this.findIndex(index);
      if (!prev) {
        this.head = current.next;
      } else {
        prev.next = current.next;
      }
      this.length--;
    } else {
      throw `${index} 超過 list 長度 ${this.length}`;
    }
  }
}
