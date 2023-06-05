import { describe, expect, it } from 'vitest';
import { bubbleSort, bubbleSort1, bubbleSort2, bubbleSort3, cocktailSort } from './BubbleSort';
import {
  sortedArr,
  notSortedArr,
  negativeArr,
  negativeArrSorted,
  testRuntime,
} from '../SortTestUtils';

describe('Bubble Sort', () => {
  it('should sort array', () => {
    const array = [...notSortedArr];

    bubbleSort(array);

    expect(array).toEqual(sortedArr);
  });

  it('should sort array with negative numbers', () => {
    const array = [...negativeArr];

    bubbleSort(array);

    expect(array).toEqual(negativeArrSorted);
  });
});

describe.skip('Test Optimized Bubble Sort runtime', () => {
  it('測試三種 bubble sort 耗時', () => {
    testRuntime(bubbleSort1);
    testRuntime(bubbleSort2);
    testRuntime(bubbleSort3);
    testRuntime(cocktailSort);
  });
});
