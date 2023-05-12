import { describe, expect, it } from 'vitest';
import { bucketSort } from './BucketSort';
import { sortedArr, notSortedArr, equalArr, reverseArr } from '../SortTestUtils';

describe('bucketSort', () => {
  it('should sort the array of numbers with different buckets amounts', () => {
    expect(bucketSort(notSortedArr, 4)).toEqual(sortedArr);
    expect(bucketSort(equalArr, 4)).toEqual(equalArr);
    expect(bucketSort(reverseArr, 4)).toEqual(sortedArr);
    expect(bucketSort(sortedArr, 4)).toEqual(sortedArr);

    expect(bucketSort(notSortedArr, 10)).toEqual(sortedArr);
    expect(bucketSort(equalArr, 10)).toEqual(equalArr);
    expect(bucketSort(reverseArr, 10)).toEqual(sortedArr);
    expect(bucketSort(sortedArr, 10)).toEqual(sortedArr);

    expect(bucketSort(notSortedArr, 50)).toEqual(sortedArr);
    expect(bucketSort(equalArr, 50)).toEqual(equalArr);
    expect(bucketSort(reverseArr, 50)).toEqual(sortedArr);
    expect(bucketSort(sortedArr, 50)).toEqual(sortedArr);
  });

  it('should sort the array of numbers with the default buckets of 1', () => {
    expect(bucketSort(notSortedArr)).toEqual(sortedArr);
    expect(bucketSort(equalArr)).toEqual(equalArr);
    expect(bucketSort(reverseArr)).toEqual(sortedArr);
    expect(bucketSort(sortedArr)).toEqual(sortedArr);
  });
});
