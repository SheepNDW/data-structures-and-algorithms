import { MinHeap } from './MinHeap';

const Compare = {
  lessThan: -1,
  biggerThan: 1,
  equal: 0,
};

export class MaxHeap extends MinHeap {
  constructor() {
    super();
  }

  /**
   * @param {number} index
   */
  heapifyUp(index) {
    let parentIndex = this.getParentIndex(index);

    while (
      index > 0 &&
      this.compare(this.heap[parentIndex], this.heap[index]) === Compare.lessThan
    ) {
      this.swap(this.heap, index, parentIndex);
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

    if (left < size && this.compare(this.heap[current], this.heap[left]) === Compare.lessThan) {
      current = left;
    }

    if (right < size && this.compare(this.heap[current], this.heap[right]) === Compare.lessThan) {
      current = right;
    }

    if (current !== index) {
      this.swap(this.heap, current, index);
      this.heapifyDown(current);
    }
  }
}
