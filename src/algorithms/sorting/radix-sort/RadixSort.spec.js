import { describe, expect, it } from 'vitest';
import { radixSort } from './RadixSort';
import { sortedArr, notSortedArr, equalArr, reverseArr } from '../SortTestUtils';

describe('radix sort', () => {
  it('should sort array', () => {
    const array = [...notSortedArr];

    const result = radixSort(array);

    expect(result).toEqual(sortedArr);

    const array2 = [35, 2, 26, 2, 5, 8, 34, 1, 56, 99, 33];

    const result2 = radixSort(array2);

    expect(result2).toEqual([1, 2, 2, 5, 8, 26, 33, 34, 35, 56, 99]);
  });

  it('should sort array with reverse numbers', () => {
    const array = [...reverseArr];

    const result = radixSort(array);

    expect(result).toEqual(sortedArr);
  });

  it('should sort array with equal numbers', () => {
    const array = [...equalArr];

    const result = radixSort(array);

    expect(result).toEqual(equalArr);
  });
});
