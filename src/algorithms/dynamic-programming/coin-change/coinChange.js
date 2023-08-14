/**
 * 322. Coin Change (Memoization Approach)
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
function coinChange(coins, amount) {
  const cache = new Array(amount + 1).fill(Infinity);
  cache[0] = 0;

  function _coinChange(coins, amount) {
    if (cache[amount] !== Infinity) return cache[amount];

    let ans = Infinity;
    for (const coin of coins) {
      if (amount >= coin) {
        // console.log('TEST');
        const count = _coinChange(coins, amount - coin);
        if (count !== -1) {
          ans = Math.min(ans, count + 1);
        }
      }
    }

    cache[amount] = ans === Infinity ? -1 : ans;
    return cache[amount];
  }

  return _coinChange(coins, amount);
}

/**
 * 322. Coin Change (Tabulation Approach)
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
function coinChange2(coins, amount) {
  const table = new Array(amount + 1).fill(Infinity);
  table[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (i < coin) continue;
      table[i] = Math.min(table[i], table[i - coin] + 1);
    }
  }

  return table[amount] === Infinity ? -1 : table[amount];
}

export { coinChange, coinChange2 };
