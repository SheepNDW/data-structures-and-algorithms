import { describe, expect, it } from 'vitest';
import { bubbleSort3 } from '../bubble-sort/BubbleSort';
import { shellSort } from '../shell-sort/ShellSort';
import {
  mergeSort,
  mergeSort2,
  mergeSortObject,
  mergeSortObject2,
  mergeSortSimple,
} from './MergeSort';
import {
  sortedArr,
  notSortedArr,
  negativeArr,
  negativeArrSorted,
  testRuntime,
} from '../SortTestUtils';

const runTest = (sortFunction, input, output) => {
  const array = [...input];
  const result = sortFunction(array);
  expect(result).toEqual(output);
};

const sortFunctions = [mergeSort2, mergeSortObject, mergeSortObject2, mergeSortSimple];

sortFunctions.forEach((sortFunction) => {
  describe(`${sortFunction.name}`, () => {
    it('should sort array', () => {
      runTest(sortFunction, notSortedArr, sortedArr);
    });

    it('should sort array with negative numbers', () => {
      runTest(sortFunction, negativeArr, negativeArrSorted);
    });
  });
});

describe.skip('test runtime', () => {
  it('compare with bubble sort and shell sort', () => {
    testRuntime(bubbleSort3);
    testRuntime(shellSort);
    testRuntime(mergeSort);
    testRuntime(mergeSort2);
    testRuntime(mergeSortObject);
    testRuntime(mergeSortObject2);
    testRuntime(mergeSortSimple);
  });
});
