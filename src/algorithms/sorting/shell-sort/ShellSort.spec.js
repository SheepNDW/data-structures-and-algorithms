import { describe, expect, it } from 'vitest';
import { shellSort, shellSort2, shellSort3 } from './ShellSort';
import { selectSort2 } from '../selection-sort/SelectionSort';
import { insertionSort2 } from '../insertion-sort/InsertionSort';
import {
  sortedArr,
  notSortedArr,
  negativeArr,
  negativeArrSorted,
  testRuntime,
} from '../SortTestUtils';

describe('shellSort', () => {
  it('should sort array', () => {
    const array = [...notSortedArr];

    shellSort(array);

    expect(array).toEqual(sortedArr);
  });

  it('should sort array with negative numbers', () => {
    const array = [...negativeArr];

    shellSort(array);

    expect(array).toEqual(negativeArrSorted);
  });
});

describe.skip('Test runtime', () => {
  it('比較 shellSort, selectionSort, insertionSort 的耗時', () => {
    testRuntime(selectSort2);
    testRuntime(insertionSort2);
    testRuntime(shellSort);
    testRuntime(shellSort2);
    testRuntime(shellSort3);
  });
});
