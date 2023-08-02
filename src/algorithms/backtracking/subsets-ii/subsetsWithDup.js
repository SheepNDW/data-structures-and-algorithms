/**
 * 90. Subsets II
 * @link https://leetcode.com/problems/subsets-ii/
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsetsWithDup(nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  const candidate = [];
  const end = nums.length;
  const hash = new Map();

  function backtrack(start) {
    const candidateKey = candidate.toString();
    if (!hash.get(candidateKey)) {
      result.push([...candidate]);
      hash.set(candidateKey, true);
    }
    for (let i = start; i < end; i++) {
      candidate.push(nums[i]);
      backtrack(i + 1);
      candidate.pop();
    }
  }

  // ==== 在 for 迴圈中去重 ====
  // function backtrack(start) {
  //   result.push([...candidate]);
  //   for (let i = start; i < end; i++) {
  //     if (i > start && nums[i] === nums[i - 1]) {
  //       continue;
  //     }
  //     candidate.push(nums[i]);
  //     backtrack(i + 1);
  //     candidate.pop();
  //   }
  // }

  backtrack(0);
  return result;
}

export { subsetsWithDup };
