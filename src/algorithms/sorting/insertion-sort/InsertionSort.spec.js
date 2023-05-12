import { describe, expect, it } from 'vitest';
import { insertionSort } from './InsertionSort';
import { sortedArr, notSortedArr, negativeArr, negativeArrSorted } from '../SortTestUtils';

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
