/**
 * LSD Radix sort algorithm
 * @param {number[]} array
 */
function radixSort(array) {
  const max = Math.max(...array);
  const times = getLoopTimes(max);
  const len = array.length;
  const buckets = [...Array(10)].map(() => []);

  for (let radix = 1; radix <= times; radix++) {
    // 個位數、十位數、百位數...
    lsdRadixSort(array, buckets, len, radix);
  }

  return array;
}

/**
 * 根據某個位數上的值得到桶子的編號
 * @param {number} num
 * @param {number} i
 */
function getBucketNumber(num, i) {
  return Math.floor((num / Math.pow(10, i - 1)) % 10);
}

/**
 * 獲取數字的位數
 * @param {number} num
 */
function getLoopTimes(num) {
  let digits = 0;
  while (num) {
    digits++;
    num = Math.floor(num / 10);
  }
  return digits;
}

/**
 * LSD 排序
 * @param {number[]} array
 * @param {number[][]} buckets
 * @param {number} len
 * @param {number} radix
 */
function lsdRadixSort(array, buckets, len, radix) {
  // 將數字放入桶子中
  for (let i = 0; i < len; i++) {
    const el = array[i];
    const bucketNum = getBucketNumber(el, radix);
    buckets[bucketNum].push(el);
  }
  let index = 0;
  // 將桶子中的數字取出來，重寫原陣列
  for (let i = 0; i < 10; i++) {
    const bucket = buckets[i];
    for (let j = 0; j < bucket.length; j++) {
      array[index++] = bucket[j];
    }
    bucket.length = 0;
  }
}

/**
 * MSD Radix sort algorithm
 * @param {number[]} array
 */
function radixSort2(array) {
  const max = Math.max(...array);
  const times = getLoopTimes(max);
  const len = array.length;
  msdRadixSort(array, len, times);
  return array;
}

function msdRadixSort(array, len, radix) {
  const buckets = [[], [], [], [], [], [], [], [], [], []];
  // 入桶
  for (let i = 0; i < len; i++) {
    const el = array[i];
    const index = getBucketNumber(el, radix);
    buckets[index].push(el);
  }
  // 遞迴每個子桶
  for (let i = 0; i < 10; i++) {
    const bucket = buckets[i];
    if (bucket.length > 1 && radix > 1) {
      msdRadixSort(bucket, bucket.length, radix - 1);
    }
  }
  let k = 0;
  // 重寫原陣列
  for (let i = 0; i < 10; i++) {
    const bucket = buckets[i];
    bucket.forEach((el) => (array[k++] = el));
    bucket.length = 0;
  }
}

// ==== Alternative implementation ====

/**
 * Radix sort algorithm
 * @param {number[]} arr
 */
function radixSort3(arr) {
  const base = 10;
  let divider = 1;
  // Math.floor(x/divider) % base
  // divider *= base
  const maxValue = Math.max(...arr);
  while (divider <= maxValue) {
    const buckets = [...Array(10)].map(() => []);
    for (const value of arr) {
      buckets[Math.floor(value / divider) % base].push(value);
    }

    arr = [].concat(...buckets);

    divider *= base;
  }

  return arr;
}

export { radixSort, radixSort2, radixSort3 };
