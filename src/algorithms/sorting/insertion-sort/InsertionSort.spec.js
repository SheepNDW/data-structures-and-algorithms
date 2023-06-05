import { describe, expect, it } from 'vitest';
import { insertionSort, insertionSort2 } from './InsertionSort';
import { bubbleSort3 } from '../bubble-sort/BubbleSort';
import { selectSort } from '../selection-sort/SelectionSort';
import {
  sortedArr,
  notSortedArr,
  negativeArr,
  negativeArrSorted,
  testRuntime,
} from '../SortTestUtils';

describe('insertionSort', () => {
  it('should sort array', () => {
    const array = [...notSortedArr];

    insertionSort(array);

    expect(array).toEqual(sortedArr);
  });

  it('should sort array with negative numbers', () => {
    const array = [...negativeArr];

    insertionSort(array);

    expect(array).toEqual(negativeArrSorted);
  });
});

describe.skip('compare with bubble sort and selection sort', () => {
  it('比較 insertion sort, bubble sort, selection sort 耗時', () => {
    testRuntime(bubbleSort3);
    testRuntime(selectSort);
    testRuntime(insertionSort);
    testRuntime(insertionSort2);
  });
});
