import { describe, expect, it } from 'vitest';
import { heapSort, heapSort2 } from './HeapSort';
import { sortedArr, notSortedArr, negativeArr, negativeArrSorted } from '../SortTestUtils';

describe('Heap Sort', () => {
  describe('max-heap sort', () => {
    // it.only('test log', () => {
    //   const array = [3, 6, 8, 1, 9, 0, 4, 7, 5, 2];
    //   heapSort(array);
    //   expect(array).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    // });
    it('should sort array', () => {
      const array = [...notSortedArr];

      heapSort(array);

      expect(array).toEqual(sortedArr);
    });

    it('should sort array with negative numbers', () => {
      const array = [...negativeArr];

      heapSort(array);

      expect(array).toEqual(negativeArrSorted);
    });
  });

  describe('min-heap sort', () => {
    it('should sort array', () => {
      const array = [...notSortedArr];

      heapSort2(array);

      expect(array).toEqual(sortedArr);
    });

    it('should sort array with negative numbers', () => {
      const array = [...negativeArr];

      heapSort2(array);

      expect(array).toEqual(negativeArrSorted);
    });
  });
});
