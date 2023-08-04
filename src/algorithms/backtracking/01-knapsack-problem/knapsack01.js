/**
 * 0/1 knapsack problem
 * @param {number} n - the number of items
 * @param {number[]} weights - weights[i] is the weight of the i-th item
 * @param {number[]} values - values[i] is the value of the i-th item
 * @param {number} capacity - the maximum weight
 * @return {[number, number[]]} - [maxValue, items]
 */
function knapsack01(n, weights, values, capacity) {
  const allocation = new Array(n).fill(0); // 表示是否選中
  let currValue = 0;
  let currWeight = 0;
  let maxValue = 0;
  let maxWeight = 0;
  let result = [];

  function backtrack(start) {
    if (start === n && currValue > maxValue) {
      maxValue = currValue;
      maxWeight = currWeight;
      result = [...allocation];
      return;
    }

    for (let i = 0; i < 2; i++) {
      if (currWeight + i * weights[start] <= capacity) {
        allocation[start] = i; // 0 為不放進包中，1 為放進包中
        currWeight += i * weights[start];
        currValue += i * values[start];
        backtrack(start + 1);
        currWeight -= i * weights[start];
        currValue -= i * values[start];
      }
    }
  }

  backtrack(0);
  return [maxValue, result];
}

export { knapsack01 };
