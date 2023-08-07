/**
 * 46. Permutations
 * @param {number[]} nums
 * @return {number[][]}
 */
function permute(nums) {
  const result = [];
  const candidate = [];
  const end = nums.length;
  const used = {};

  function backtrack(start) {
    if (start === end) {
      result.push([...candidate]);
    } else {
      for (let i = 0; i < end; i++) {
        if (!used[i]) {
          candidate.push(nums[i]);
          used[i] = true;
          backtrack(start + 1);
          candidate.pop();
          used[i] = false;
        }
      }
    }
  }

  backtrack(0);
  return result;
}

export { permute };
