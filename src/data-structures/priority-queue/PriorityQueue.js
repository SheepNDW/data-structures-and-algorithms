import { swap } from '@/algorithms/sorting/SortTestUtils';

class PriorityQueue {
  heap = [];

  push(el) {
    const array = this.heap;
    array.push(el);
    let child = array.length - 1;
    let parent = (child - 1) >> 1;

    while (array[child] > array[parent]) {
      swap(array, child, parent); // 讓大的元素往上浮
      child = parent;
      parent = (child - 1) >> 1;
    }
  }

  pop(el) {
    const array = this.heap;
    let index = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] === el) {
        index = i;
        break;
      }
    }

    const target = array[index];
    swap(array, index, array.length - 1);

    let parent = 0;
    let child = parent * 2 + 1;
    while (true) {
      if (array[child] < array[child + 1] && array[child + 1] !== target) {
        child++;
      }

      if (array[parent] < array[child] && array[child] !== target) {
        swap(array, parent, child);
        parent = child;
        child = parent * 2 + 1;
      } else {
        break;
      }
    }

    return array.pop();
  }

  peek() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  toString() {
    return this.heap.toString();
  }
}

class MinPriorityQueue extends PriorityQueue {
  constructor() {
    super();
  }

  push(el) {
    const array = this.heap;
    array.push(el);
    let child = array.length - 1;
    let parent = (child - 1) >> 1;

    while (array[child] < array[parent]) {
      swap(array, child, parent); // 讓小的元素往上浮
      child = parent;
      parent = (child - 1) >> 1;
    }
  }

  pop(el) {
    const array = this.heap;
    let index = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] === el) {
        index = i;
        break;
      }
    }

    const target = array[index];
    swap(array, index, array.length - 1);

    let parent = 0;
    let child = parent * 2 + 1;
    while (true) {
      if (array[child] > array[child + 1] && array[child + 1] !== target) {
        child++;
      }

      if (array[parent] > array[child] && array[child] !== target) {
        swap(array, parent, child);
        parent = child;
        child = parent * 2 + 1;
      } else {
        break;
      }
    }

    return array.pop();
  }
}

export { PriorityQueue, MinPriorityQueue };
