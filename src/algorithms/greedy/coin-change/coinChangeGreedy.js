/**
 * Coin Change (Greedy Approach)
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
function coinChangeGreedy(coins, amount) {
  // 假設 coins 陣列已經由大到小排序過
  let count = 0;
  let i = coins.length - 1;

  // 進行 greedy 選擇，直到 amount 為 0
  while (amount > 0) {
    // 如果當前的 coin 大於 amount，則跳過
    if (coins[i] > amount) {
      i--;
      continue;
    }

    // 進行選擇
    amount -= coins[i];
    count++;
  }

  return amount === 0 ? count : -1;
}

export { coinChangeGreedy };
