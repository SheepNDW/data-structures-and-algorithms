/**
 * Sequential search algorithm
 * @param {*[]} arr
 * @param {*} value
 * @return {number} index of value in arr or -1 if not found
 */
export function sequentialSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }
  return -1;
}
