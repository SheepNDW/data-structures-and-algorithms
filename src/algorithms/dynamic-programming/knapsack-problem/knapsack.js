// 0/1 背包問題
// 有一個背包，最多能承受的重量為 W 公斤
// 現有 n 個物品，第 i 個物品的重量為 weights[i] 公斤，價值為 values[i] 元
// 求解將哪些物品裝入背包可使這些物品的總重量不超過背包容量，且總價值最大

// example:
// weights = [2, 2, 6, 5, 4]
// values = [6, 3, 5, 4, 6]
// W = 10

// | weights | values | id | 0 | 1 | 2 | 3 | 4 | 5 | 6  | 7  | 8  | 9  |  10 |
// | ------- | ------ | -- | - | - | - | - | - | - | -- | -- | -- | -- | --- |
// | 2       | 6      | 0  | 0 | 0 | 6 | 6 | 6 | 6 | 6  | 6  | 6  | 6  |  6  |
// | 2       | 3      | 1  | 0 | 0 | 6 | 6 | 6 | 6 | 6  | 6  | 6  | 9  |  9  |
// | 6       | 5      | 2  | 0 | 0 | 6 | 6 | 9 | 9 | 9  | 9  | 11 | 11 |  14 |
// | 5       | 4      | 3  | 0 | 0 | 6 | 6 | 9 | 9 | 9  | 10 | 11 | 13 |  14 |
// | 4       | 6      | 4  | 0 | 0 | 6 | 6 | 9 | 9 | 12 | 12 | 15 | 15 |  15 |

/**
 * 0/1 knapsack problem
 * @param {number[]} weights - weights[i] is the weight of the i-th item
 * @param {number[]} values - values[i] is the value of the i-th item
 * @param {number} W - the maximum weight
 * @return {number}
 */
export function knapsack(weights, values, W) {
  const n = weights.length;
  const f = [[]];

  for (let j = 0; j <= W; j++) {
    if (j < weights[0]) {
      f[0][j] = 0;
    } else {
      f[0][j] = values[0];
    }
  }

  for (let j = 0; j <= W; j++) {
    for (let i = 1; i < n; i++) {
      if (!f[i]) {
        f[i] = [];
      }
      if (j < weights[i]) {
        f[i][j] = f[i - 1][j];
      } else {
        f[i][j] = Math.max(f[i - 1][j], f[i - 1][j - weights[i]] + values[i]);
      }
    }
  }

  return f[n - 1][W];
}
