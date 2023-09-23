import { UnionFind } from '../UnionFind';

/**
 * 547. Number of Provinces
 * @param {number[][]} isConnected
 * @return {number}
 */
function findCircleNum(isConnected) {
  const n = isConnected.length;
  const union = new UnionFind(n);

  for (let i = 0; i < n; i++) {
    const row = isConnected[i];
    for (let j = 0; j < row.length; j++) {
      if (row[j] === 1) union.merge(i, j);
    }
  }

  return union.size;
}

export { findCircleNum };
