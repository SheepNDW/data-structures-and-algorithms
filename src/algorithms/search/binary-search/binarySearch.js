/**
 * Binary search algorithm
 * @param {*[]} arr - sorted array
 * @param {*} target - target value to search
 * @return {number} index of found element or -1 if element is not found
 */
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

export { binarySearch };
