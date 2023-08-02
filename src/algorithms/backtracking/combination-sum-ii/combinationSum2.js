/**
 * 40. Combination Sum II
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum2(candidates, target) {
  candidates.sort((a, b) => a - b);
  const result = [];
  const combination = [];
  const end = candidates.length;
  const hash = {};

  function backtrack(start, target) {
    const combinationKey = combination.toString();
    if (target === 0 && !hash[combinationKey]) {
      result.push([...combination]);
      hash[combinationKey] = true;
      return;
    }

    if (target > 0) {
      for (let i = start; i < end; i++) {
        combination.push(candidates[i]);
        backtrack(i + 1, target - candidates[i]);
        combination.pop();
      }
    }
  }

  backtrack(0, target);
  return result;
}

export { combinationSum2 };
