/**
 * 39. Combination Sum
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum(candidates, target) {
  const result = [];
  const combination = [];
  const end = candidates.length;

  function backtrack(start, target) {
    if (target === 0) {
      result.push([...combination]);
      return;
    }
    if (target > 0) {
      for (let i = start; i < end; i++) {
        combination.push(candidates[i]);
        // 注意這裡 i 沒有加 1，因為可以重複使用相同的數字
        backtrack(i, target - candidates[i]);
        combination.pop();
      }
    }
  }

  backtrack(0, target);
  return result;
}

export { combinationSum };
