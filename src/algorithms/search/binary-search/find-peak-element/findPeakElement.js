/**
 * 162. Find Peak Element
 * @param {number[]} nums
 * @return {number}
 */
function findPeakElement0(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    const leftNeighbor = mid - 1 >= 0 ? nums[mid - 1] : -Infinity;
    const rightNeighbor = mid + 1 < nums.length ? nums[mid + 1] : -Infinity;

    if (nums[mid] > leftNeighbor && nums[mid] > rightNeighbor) {
      return mid;
    }

    if (nums[mid] < rightNeighbor) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

// ==== Alternative Solution ====

/**
 * 162. Find Peak Element (alternative solution)
 * @param {number[]} nums
 * @return {number}
 */
function findPeakElement(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((right + left) / 2);

    if (nums[mid] > nums[mid + 1]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

export { findPeakElement };
