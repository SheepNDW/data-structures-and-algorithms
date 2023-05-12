/**
 * Counting sort algorithm
 * @param {unknown[]} array
 */
export function countingSort(array) {
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
 * @param {*[]} arr
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
 * @param {*[]} arr
 * @returns {number}
 */
function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) min = arr[i];
  }
  return min;
}
