/**
 * Longest Common Subsequence
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
export function LCS(str1, str2) {
  const m = str1.length;
  const n = str2.length;

  const dp = [new Array(n + 1).fill(0)];

  for (let i = 1; i <= m; i++) {
    dp[i] = [0];
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
      }
    }
  }

  const lcs = printLCS(dp, str1, str2, m, n);
  console.log(lcs);
  return dp[m][n];
}

function printLCS(dp, str1, str2, i, j) {
  if (i === 0 || j === 0) {
    return '';
  }

  if (str1[i - 1] === str2[j - 1]) {
    return printLCS(dp, str1, str2, i - 1, j - 1) + str1[i - 1];
  }

  if (dp[i][j - 1] > dp[i - 1][j]) {
    return printLCS(dp, str1, str2, i, j - 1);
  }

  return printLCS(dp, str1, str2, i - 1, j);
}
