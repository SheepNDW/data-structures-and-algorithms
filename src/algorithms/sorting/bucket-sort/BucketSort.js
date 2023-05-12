import { insertionSort } from '../insertion-sort/InsertionSort';

/**
 * Bucket sort algorithm
 * @param {number[]} arr
 * @param {number} bucketSize - default is 3
 * @return {number[]}
 */
export function bucketSort(arr, bucketSize = 3) {
  if (arr.length < 2) {
    return arr;
  }

  // #1 create buckets
  const buckets = createBuckets(arr, bucketSize);

  // #2 sort buckets(insertion sort) and merge them
  return sortBuckets(buckets);
}

/**
 * Create buckets
 * @param {number[]} arr
 * @param {number} bucketSize
 * @return {number[][]}
 */
function createBuckets(arr, bucketSize) {
  let minValue = Math.min(...arr);
  let maxValue = Math.max(...arr);

  const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;

  // const buckets = [];
  // for (let i = 0; i < bucketCount; i++) {
  //   buckets[i] = [];
  // }
  const buckets = [...Array(bucketCount)].map(() => []);

  for (let i = 0; i < arr.length; i++) {
    const index = Math.floor((arr[i] - minValue) / bucketSize);
    buckets[index].push(arr[i]);
  }

  return buckets;
}

/**
 * Sort buckets and merge them
 * @param {number[][]} buckets
 * @return {number[]}
 */
function sortBuckets(buckets) {
  const sortedArr = [];

  for (let i = 0; i < buckets.length; i++) {
    if (buckets[i][0] !== undefined) {
      insertionSort(buckets[i]);
      sortedArr.push(...buckets[i]);
    }
  }

  return sortedArr;
}
