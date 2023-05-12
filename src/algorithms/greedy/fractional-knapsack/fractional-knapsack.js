/**
 * Fractional Knapsack Problem
 * @param {number} capacity - The capacity of the knapsack
 * @param {number[]} weights - The weights of the items
 * @param {number[]} values - The values of the items
 * @return {number} - The maximum total value of the knapsack
 */
export function fractionalKnapsack(capacity, weights, values) {
  const list = [];

  for (let i = 0; i < weights.length; i++) {
    list.push({
      num: i + 1,
      weight: weights[i],
      value: values[i],
      ratio: values[i] / weights[i],
    });
  }

  list.sort((a, b) => b.ratio - a.ratio);

  const selects = [];
  let totalValue = 0;

  for (let i = 0; i < list.length; i++) {
    let item = list[i];
    if (item.weight <= capacity) {
      selects.push({
        num: item.num,
        weight: item.weight,
        value: item.value,
        ratio: 1,
      });

      totalValue += item.value;
      capacity -= item.weight;
    } else if (capacity > 0) {
      const ratio = capacity / item.weight;
      selects.push({
        num: item.num,
        weight: item.weight * ratio,
        value: item.value * ratio,
        ratio,
      });

      totalValue += item.value * ratio;
      capacity -= item.weight * ratio;
      break;
    } else if (capacity <= 0) {
      break;
    }
  }

  return totalValue;
}
