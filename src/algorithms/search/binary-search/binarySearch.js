/**
 * Binary search algorithm
 * @param {*} target - target value to search
 * @param {*[]} sortedArr - sorted array with comparable values
 * @param {number} [start] - left index
 * @param {number} [end] - right index
 * @return {number} index of found element or -1 if element is not found
 */
export function binarySearch(target, sortedArr, start = 0, end = sortedArr.length - 1) {
  if (start <= end && target >= sortedArr[start] && target <= sortedArr[end]) {
    if (sortedArr[start] === target) {
      return start;
    }
    if (sortedArr[end] === target) {
      return end;
    }

    const mid = Math.ceil((start + end) / 2);
    if (sortedArr[mid] === target) {
      return mid;
    } else if (sortedArr[mid] > target) {
      return binarySearch(target, sortedArr, start + 1, mid - 1);
    } else {
      return binarySearch(target, sortedArr, mid + 1, end - 1);
    }
  }

  return -1;
}
