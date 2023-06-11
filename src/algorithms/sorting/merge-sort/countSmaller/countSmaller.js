/**
 * Count of Smaller Numbers After Self
 * @param {number[]} nums
 * @return {number[]}
 * @see https://leetcode.com/problems/count-of-smaller-numbers-after-self/
 */
function countSmaller(nums) {
  const n = nums.length;
  const result = Array(n).fill(0);
  const indices = Array.from({ length: n }, (_, index) => index);

  const mergeSort = (begin, end) => {
    if (begin < end) {
      const mid = begin + ((end - begin) >> 1);
      mergeSort(begin, mid);
      mergeSort(mid + 1, end);
      merge(begin, mid, mid + 1, end);
    }
  };

  const merge = (begin, end, begin2, end2) => {
    const temp = [];
    let i = begin;
    let j = begin2;

    while (i <= end && j <= end2) {
      if (nums[indices[i]] <= nums[indices[j]]) {
        result[indices[i]] += j - begin2;
        temp.push(indices[i++]);
      } else {
        temp.push(indices[j++]);
      }
    }
    while (i <= end) {
      result[indices[i]] += j - begin2;
      temp.push(indices[i++]);
    }
    while (j <= end2) {
      temp.push(indices[j++]);
    }

    for (let i = begin; i <= end2; i++) {
      indices[i] = temp[i - begin];
    }
  };

  mergeSort(0, n - 1);
  return result;
}

// Brute Force
// function countSmaller(nums) {
//   const n = nums.length;
//   const result = [];

//   for (let i = 0; i < n; i++) {
//     let count = 0;
//     for (let j = i + 1; j < n; j++) {
//       if (nums[j] < nums[i]) count++;
//     }
//     result.push(count);
//   }

//   return result;
// }

export { countSmaller };
