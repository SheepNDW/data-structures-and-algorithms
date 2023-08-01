/**
 * 78. Subsets
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsets(nums) {
  if (!Object(nums).length) {
    return [];
  }

  nums.sort((a, b) => a - b);
  const result = [];
  const candidate = [];
  const end = nums.length;

  function backtrack(start) {
    result.push([...candidate]); // 沒有長度限制，直接放進 result

    for (let i = start; i < end; i++) {
      candidate.push(nums[i]); // 試探
      backtrack(i + 1); // 修改參數
      candidate.pop(); // 不管成功與否，退回上一步
    }
  }

  backtrack(0);
  return result;
}

export { subsets };
