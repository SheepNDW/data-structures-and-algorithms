import { describe, expect, it } from 'vitest';
import { bubbleSort } from './BubbleSort';
import { sortedArr, notSortedArr, negativeArr, negativeArrSorted } from '../SortTestUtils';

describe('Bubble Sort', () => {
  it('should sort array', () => {
    const array = [...notSortedArr];

    bubbleSort(array);

    expect(array).toEqual(sortedArr);
  });

  it('should sort array with negative numbers', () => {
    const array = [...negativeArr];

    bubbleSort(array);

    expect(array).toEqual(negativeArrSorted);
  });
});
