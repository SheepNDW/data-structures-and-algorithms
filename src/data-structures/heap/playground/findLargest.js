import { minHeapifyDown } from '@/algorithms/sorting/heap-sort/HeapSort';

function findLargest(array, k) {
  const n = array.length;
  const result = array.slice(0, k);

  for (let i = k >> 1; i >= 0; i--) {
    minHeapifyDown(result, i, k);
  }

  for (let i = k; i < n; i++) {
    if (result[0] < array[i]) {
      result[0] = array[i];
      minHeapifyDown(result, 0, k);
    }
  }

  return result;
}

export { findLargest };
