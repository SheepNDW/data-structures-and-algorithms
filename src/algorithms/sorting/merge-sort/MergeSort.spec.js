import { describe, expect, it } from 'vitest';
import { mergeSort } from './MergeSort';
import { sortedArr, notSortedArr, negativeArr, negativeArrSorted } from '../SortTestUtils';

describe('mergeSort', () => {
  it('should sort array', () => {
    const array = [...notSortedArr];

    const result = mergeSort(array);

    expect(result).toEqual(sortedArr);
  });

  it('should sort array with negative numbers', () => {
    const array = [...negativeArr];

    const result = mergeSort(array);

    expect(result).toEqual(negativeArrSorted);
  });
});
