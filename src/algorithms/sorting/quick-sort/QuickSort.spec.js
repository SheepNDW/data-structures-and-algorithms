import { describe, expect, it } from 'vitest';
import { quickSort, quickSortSimple, quickSortStack } from './QuickSort';
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

describe('QuickSort Simple', () => {
  it('should sort array', () => {
    const array = [...notSortedArr];

    const result = quickSortSimple(array);

    expect(result).toEqual(sortedArr);
  });

  it('should sort array with negative numbers', () => {
    const array = [...negativeArr];

    const result = quickSortSimple(array);

    expect(result).toEqual(negativeArrSorted);
  });
});

describe('QuickSort Stack', () => {
  it('should sort array', () => {
    const array = [...notSortedArr];

    const result = quickSortStack(array);

    expect(result).toEqual(sortedArr);
  });

  it('should sort array with negative numbers', () => {
    const array = [...negativeArr];

    const result = quickSortStack(array);

    expect(result).toEqual(negativeArrSorted);
  });
});
