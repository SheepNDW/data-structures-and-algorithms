/**
 * boat load problem
 * @param {number} c1 - the maximum weight of the first boat
 * @param {number} c2 - the maximum weight of the second boat
 * @param {number[]} goods - goods[i] is the weight of the i-th item
 * @return {[number[], number[]]}
 */
function boatLoad(c1, c2, goods) {
  goods.sort();
  const boats = [[], []];
  const currWeight = [0, 0];
  const maxWeight = [c1, c2];

  function backtrack(start) {
    if (start >= goods.length) {
      return currWeight[0] <= maxWeight[0] && currWeight[1] <= maxWeight[1];
    } else {
      const weight = goods[start];
      for (let i = 0; i < 2; i++) {
        if (currWeight[i] + weight > maxWeight[i]) {
          continue;
        }

        currWeight[i] += weight;
        boats[i].push(weight);

        if (backtrack(start + 1)) {
          return true;
        }

        currWeight[i] -= weight;
        boats[i].pop();
      }
    }
    return false;
  }

  backtrack(0);
  return boats;
}

export { boatLoad };
