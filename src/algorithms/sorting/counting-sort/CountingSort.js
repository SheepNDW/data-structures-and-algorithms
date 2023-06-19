/**
 * Counting sort algorithm
 * @param {number[]} array
 */
function countSort(array) {
  const n = array.length;
  let max = array[0];
  let min = array[0];
  for (let i = 1; i < n; i++) {
    if (max < array[i]) max = array[i];
    if (min > array[i]) min = array[i];
  }
  const size = max - min + 1;
  const buckets = new Array(size).fill(0);
  // 遍歷所有 bucket
  for (let i = 0; i < n; i++) {
    buckets[array[i] - min]++;
  }
  for (let i = 1; i < size; i++) {
    // 累加前面所有 bucket 的值
    buckets[i] += buckets[i - 1];
  }
  const result = new Array(n); // 逆向遍歷原陣列（保證穩定性）
  for (let i = n - 1; i >= 0; i--) {
    result[--buckets[array[i] - min]] = array[i];
  }
  return result;
}

// ==== Alternative implementation ====

/**
 * Counting sort algorithm
 * @param {number[]} array
 */
function countingSort(array) {
  const length = array.length;
  if (length < 2) return array;

  // Alternative: const maxValue = Math.max(...array);
  const maxValue = findMax(array);
  const minValue = findMin(array);
  const range = maxValue - minValue + 1;
  const counts = new Array(range).fill(0);

  array.forEach((item) => counts[item - minValue]++);

  const newArr = new Array(length);
  let sortedIndex = 0;

  for (let i = 0; i < counts.length; i++) {
    while (counts[i] > 0) {
      newArr[sortedIndex++] = i + minValue;
      counts[i]--;
    }
  }

  return newArr;
}

/**
 * Find max value in array
 * @param {number[]} arr
 * @returns {number}
 */
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) max = arr[i];
  }
  return max;
}

/**
 * Find min value in array
 * @param {number[]} arr
 * @returns {number}
 */
function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) min = arr[i];
  }
  return min;
}

export { countSort, countingSort };
