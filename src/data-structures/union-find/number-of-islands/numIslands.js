import { UnionFind } from '../UnionFind';

/**
 * 200. Number of Islands
 * @param {string[][]} grid
 * @return {number}
 */
function numIslands(grid) {
  let size = 0;
  let total = 0;
  for (let i = 0; i < grid.length; i++) {
    const row = grid[i];
    for (let j = 0; j < row.length; j++) {
      if (row[j] === '1') {
        size++;
      }
      total++;
    }
  }

  const uf = new UnionFind(total);
  uf.size = size;

  for (let i = 0; i < grid.length; i++) {
    const row = grid[i];
    const topRow = grid[i - 1]; // 上面一列
    const n = row.length;
    for (let j = 0; j < n; j++) {
      if (row[j] === '1' && row[j + 1] === '1') {
        uf.merge(i * n + j, i * n + j + 1); // 左右相鄰，合併
      }
      if (topRow && row[j] === '1' && topRow[j] === '1') {
        uf.merge(i * n + j, (i - 1) * n + j); // 上下相鄰，合併
      }
    }
  }

  return uf.size;
}

export { numIslands };
