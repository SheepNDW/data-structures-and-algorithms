import { maxHeapifyDown } from '@/algorithms/sorting/heap-sort/HeapSort';
import { swap } from '@/algorithms/sorting/SortTestUtils';

function findKthLargest(array, k) {
  const n = array.length;
  for (let i = Math.floor(n / 2); i >= 0; i--) {
    maxHeapifyDown(array, i, n);
  }

  if (k === 0) {
    console.log(array);
    return array[0];
  }
  k--;
  for (let i = n - 1; i > 0; i--) {
    swap(array, 0, i);
    maxHeapifyDown(array, 0, i);
    if (k-- === 0) {
      return array[0];
    }
  }
}

export { findKthLargest };
