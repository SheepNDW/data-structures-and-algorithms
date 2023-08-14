/**
 * Longest Non-Decreasing Subsequence
 * @param {number[]} array
 */
function longestNonDecreasingSequence(array) {
  const dp = new Array(array.length).fill(1);
  let max = 1;
  let maxIndex = 0;

  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      const current = array[i];
      const previous = array[j];

      if (current >= previous && dp[i] < dp[j] + 1) {
        dp[i] = dp[j] + 1;

        if (max < dp[i]) {
          max = dp[i];
          maxIndex = i;
        }
      }
    }
  }

  const result = [array[maxIndex]];
  let m = max;
  let i = maxIndex - 1; // 從最後一個往前找
  while (m > 1) {
    // 相鄰的 dp[i] 都是等差或是相差 1
    if (dp[i] === m - 1 && array[i] <= array[maxIndex]) {
      result.unshift(array[i]);
      maxIndex = i;
      m--;
    }
    i--;
  }

  return result;
}

export { longestNonDecreasingSequence };
