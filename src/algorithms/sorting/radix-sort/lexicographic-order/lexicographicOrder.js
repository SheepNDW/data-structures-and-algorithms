const character = {};
'abcdefghijklmnopqrstuvwxyz'.split('').forEach((char, index) => {
  character[char] = index + 1;
});

/**
 * @param {string} c
 * @param {number} length
 * @return {{c: string, arr: number[]}}
 */
function toNum(c, length) {
  const obj = {};
  obj.c = c;
  obj.arr = [];
  for (let i = 0; i < length; i++) {
    obj.arr[i] = character[c[i]] || 0;
  }
  return obj;
}

/**
 * @param {{c: string, arr: number[]}} obj
 * @param {number} i
 */
function getBucketNumber(obj, i) {
  return obj.arr[i];
}

/**
 * Lexicographic order (radix sort implementation)
 * @param {string[]} array
 */
function lexSort(array) {
  const len = array.length;
  let loopTimes = 0;

  // 求出最長的字串，並得到它的長度，那也是最高位數
  for (let i = 0; i < len; i++) {
    const el = array[i];
    const charLength = el.length;
    if (charLength > loopTimes) {
      loopTimes = charLength;
    }
  }

  // 將字串轉成數字陣列
  const nums = array.map((el) => toNum(el, loopTimes));
  // 開始多關鍵字排序
  msdRadixSort(nums, len, 0, loopTimes);
  // 變回字串
  for (let i = 0; i < len; i++) {
    array[i] = nums[i].c;
  }
  return array;
}

/**
 * @param {{c: string, arr: number[]}[]} array
 * @param {number} len
 * @param {number} radix
 * @param {number} radixs
 */
function msdRadixSort(array, len, radix, radixs) {
  const buckets = [];
  for (let i = 0; i <= 26; i++) {
    buckets[i] = [];
  }
  // 入桶
  for (let i = 0; i < len; i++) {
    const el = array[i];
    const index = getBucketNumber(el, radix);
    buckets[index].push(el);
  }
  // 遞迴子桶
  for (let i = 0; i <= 26; i++) {
    const bucket = buckets[i];
    if (bucket.length > 1 && radix < radixs) {
      msdRadixSort(bucket, bucket.length, radix + 1, radixs);
    }
  }
  let k = 0;
  // 重寫原陣列
  for (let i = 0; i <= 26; i++) {
    const bucket = buckets[i];
    for (let j = 0; j < bucket.length; j++) {
      array[k++] = bucket[j];
    }
    bucket.length = 0;
  }
}

export { lexSort };
