const Compare = {
  lessThan: -1,
  biggerThan: 1,
  equal: 0,
};

export class MinHeap {
  heap = [];

  /**
   * @param {number} parentIndex
   * @return {number}
   */
  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  /**
   * @param {number} parentIndex
   * @return {number}
   */
  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }

  /**
   * @param {number} childIndex
   * @return {number}
   */
  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  compare(a, b) {
    if (a === b) {
      return Compare.equal;
    }
    return a < b ? Compare.lessThan : Compare.biggerThan;
  }

  insert(value) {
    if (value != null) {
      this.heap.push(value);
      // compare the inserted value with its parent
      this.heapifyUp(this.heap.length - 1);
      return true;
    }

    return false;
  }

  /**
   * @param {number} index
   */
  heapifyUp(index) {
    let parentIndex = this.getParentIndex(index);

    while (
      index > 0 &&
      this.compare(this.heap[parentIndex], this.heap[index]) === Compare.biggerThan
    ) {
      this.swap(this.heap, parentIndex, index);
      index = parentIndex;
      parentIndex = this.getParentIndex(index);
    }
  }

  /**
   * @param {number} index
   */
  heapifyDown(index) {
    let current = index;
    let left = this.getLeftChildIndex(index);
    let right = this.getRightChildIndex(index);
    let size = this.size();

    if (left < size && this.compare(this.heap[current], this.heap[left]) === Compare.biggerThan) {
      current = left;
    }

    if (right < size && this.compare(this.heap[current], this.heap[right]) === Compare.biggerThan) {
      current = right;
    }

    if (current !== index) {
      this.swap(this.heap, current, index);
      this.heapifyDown(current);
    }
  }

  /**
   * @param {Array} array
   * @param {number} a
   * @param {number} b
   */
  swap(array, a, b) {
    [array[a], array[b]] = [array[b], array[a]];
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  /**
   * returns the top element of the heap
   * @return {*}
   */
  peek() {
    return this.heap[0] ?? null;
  }

  extract() {
    if (this.isEmpty()) {
      return null;
    }
    if (this.size() === 1) {
      return this.heap.shift();
    }

    const removedValue = this.heap[0];

    // move the last element from the end to the head
    this.heap[0] = this.heap.pop();

    // do heapify down to move the element at index 0 to a correct place
    this.heapifyDown(0);
    return removedValue;
  }

  toString() {
    return this.heap.toString();
  }
}
