import { insertionSort } from '../insertion-sort/InsertionSort';

/**
 * Bucket sort algorithm
 * @param {number[]} array
 * @param {number} bucketSize
 */
function bucketSort(array, bucketSize = 3) {
  if (array <= 1) {
    return array;
  }
  const n = array.length;
  const min = Math.min(...array);
  const max = Math.max(...array);
  if (min === max) {
    return array;
  }
  const capacity = (max - min + 1) / bucketSize;
  const buckets = new Array(max - min + 1);
  for (let i = 0; i < n; i++) {
    const el = array[i];
    const bucketIndex = Math.floor((el - min) / capacity);
    const bucket = buckets[bucketIndex];
    if (bucket) {
      let jn = bucket.length;
      if (el >= bucket[jn - 1]) {
        bucket[jn] = el;
      } else {
        insertSort: for (let j = 0; j < jn; j++) {
          if (bucket[j] > el) {
            while (jn > j) {
              // 全部向後挪一位
              bucket[jn] = bucket[jn - 1];
              jn--;
            }
            bucket[j] = el; // 讓 el 佔據 bucket[j] 的位置
            break insertSort;
          }
        }
      }
    } else {
      buckets[bucketIndex] = [el];
    }
  }
  let index = 0;
  for (let i = 0; i < bucketSize; i++) {
    const bucket = buckets[i];
    for (let k = 0; k < bucket.length; k++) {
      array[index++] = bucket[k];
    }
  }
  return array;
}

/**
 * Bucket sort algorithm
 * @param {number[]} arr
 * @param {number} bucketSize - default is 3
 * @return {number[]}
 */
function bucketSort2(arr, bucketSize = 3) {
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

export { bucketSort, bucketSort2 };
