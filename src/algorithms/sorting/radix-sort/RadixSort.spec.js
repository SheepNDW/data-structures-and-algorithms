import { describe, expect, it } from 'vitest';
import { radixSort as lsdRadixSort, radixSort2 as msdRadixSort } from './RadixSort';
import { sortedArr, notSortedArr, equalArr, reverseArr } from '../SortTestUtils';

describe('lsd radix sort', () => {
  it('should sort array', () => {
    const array = [...notSortedArr];

    const result = lsdRadixSort(array);

    expect(result).toEqual(sortedArr);

    const array2 = [170, 45, 75, 90, 802, 2, 24, 66];

    const result2 = lsdRadixSort(array2);

    expect(result2).toEqual([2, 24, 45, 66, 75, 90, 170, 802]);
  });

  it('should sort array with reverse numbers', () => {
    const array = [...reverseArr];

    const result = lsdRadixSort(array);

    expect(result).toEqual(sortedArr);
  });

  it('should sort array with equal numbers', () => {
    const array = [...equalArr];

    const result = lsdRadixSort(array);

    expect(result).toEqual(equalArr);
  });
});

describe('msd radix sort', () => {
  it('should sort array', () => {
    const array = [...notSortedArr];

    const result = msdRadixSort(array);

    expect(result).toEqual(sortedArr);

    const array2 = [170, 45, 75, 90, 802, 2, 24, 66];

    const result2 = msdRadixSort(array2);

    expect(result2).toEqual([2, 24, 45, 66, 75, 90, 170, 802]);
  });

  it('should sort array with reverse numbers', () => {
    const array = [...reverseArr];

    const result = msdRadixSort(array);

    expect(result).toEqual(sortedArr);
  });

  it('should sort array with equal numbers', () => {
    const array = [...equalArr];

    const result = msdRadixSort(array);

    expect(result).toEqual(equalArr);
  });
});
