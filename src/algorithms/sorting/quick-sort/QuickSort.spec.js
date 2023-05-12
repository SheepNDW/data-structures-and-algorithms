import { describe, expect, it } from 'vitest';
import { quickSort } from './QuickSort';
import { sortedArr, notSortedArr, negativeArr, negativeArrSorted } from '../SortTestUtils';

describe('QuickSort', () => {
  it('should sort array', () => {
    const array = [...notSortedArr];

    const result = quickSort(array);

    expect(result).toEqual(sortedArr);
  });

  it('should sort array with negative numbers', () => {
    const array = [...negativeArr];

    const result = quickSort(array);

    expect(result).toEqual(negativeArrSorted);
  });
});
