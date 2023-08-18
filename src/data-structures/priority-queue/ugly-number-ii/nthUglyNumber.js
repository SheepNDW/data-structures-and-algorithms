import { MinPriorityQueue } from '../PriorityQueue';

/**
 * 264. Ugly Number II
 * @param {number} n - nth number
 * @return {number} - nth ugly number
 */
function nthUglyNumber(n) {
  const hash = new Set();
  const queue = new MinPriorityQueue();
  queue.push(1);
  hash.add(1);

  const factors = [2, 3, 5];
  let result = 1;
  for (let i = 0; i < n; i++) {
    result = queue.pop();
    for (const factor of factors) {
      const next = result * factor;
      if (!hash.has(next)) {
        hash.add(next);
        queue.push(next);
      }
    }
  }

  return result;
}

export { nthUglyNumber };
