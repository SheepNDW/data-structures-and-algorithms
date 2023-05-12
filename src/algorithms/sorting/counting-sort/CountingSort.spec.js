import { describe, expect, it } from 'vitest';
import { countingSort } from './CountingSort';
import { sortedArr, notSortedArr, negativeArr, negativeArrSorted } from '../SortTestUtils';

describe('countingSort', () => {
  it('should sort array', () => {
    const array = [...notSortedArr];

    const result = countingSort(array);

    expect(result).toEqual(sortedArr);
  });

  it('should sort array with negative numbers', () => {
    const array = [...negativeArr];

    const result = countingSort(array);

    expect(result).toEqual(negativeArrSorted);
  });
});
