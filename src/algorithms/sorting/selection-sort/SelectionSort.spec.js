import { describe, expect, it } from 'vitest';
import { selectSort, selectSort2 } from './SelectionSort';
import { bubbleSort1, bubbleSort2, bubbleSort3 } from '../bubble-sort/BubbleSort';
import {
  sortedArr,
  notSortedArr,
  negativeArr,
  negativeArrSorted,
  testRuntime,
} from '../SortTestUtils';

describe('selectionSort', () => {
  it('should sort array', () => {
    const array = [...notSortedArr];

    selectSort(array);

    expect(array).toEqual(sortedArr);
  });

  it('should sort array with negative numbers', () => {
    const array = [...negativeArr];

    selectSort(array);

    expect(array).toEqual(negativeArrSorted);
  });

  it.skip('test runtime', () => {
    testRuntime(selectSort);
    testRuntime(selectSort2);
  });
});

describe.skip('compare with bubble sort', () => {
  it('比較 bubble sort 與 selection sort 的耗時', () => {
    testRuntime(bubbleSort1);
    testRuntime(bubbleSort2);
    testRuntime(bubbleSort3);
    testRuntime(selectSort);
    testRuntime(selectSort2);
  });
});
