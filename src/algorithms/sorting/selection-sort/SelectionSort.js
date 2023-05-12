import { swap } from '@/algorithms/sorting/SortTestUtils';

/**
 * Selection sort algorithm
 * @param {unknown[]} array
 */
export function selectionSort(array) {
  const length = array.length;
  let minIndex;

  for (let i = 0; i < length - 1; i++) {
    minIndex = i;
    for (let j = i; j < length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    if (i !== minIndex) {
      swap(array, i, minIndex);
    }
  }
}
