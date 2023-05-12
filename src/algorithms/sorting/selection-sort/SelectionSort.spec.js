import { describe, expect, it } from 'vitest';
import { selectionSort } from './SelectionSort';
import { sortedArr, notSortedArr, negativeArr, negativeArrSorted } from '../SortTestUtils';

describe('selectionSort', () => {
  it('should sort array', () => {
    const array = [...notSortedArr];

    selectionSort(array);

    expect(array).toEqual(sortedArr);
  });

  it('should sort array with negative numbers', () => {
    const array = [...negativeArr];

    selectionSort(array);

    expect(array).toEqual(negativeArrSorted);
  });
});
