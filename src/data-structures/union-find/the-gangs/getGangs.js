import { UnionFind } from '../UnionFind';

/**
 * The Gangs
 * @param {number} n - number of people
 * @param {number} counts - number of descriptions
 * @param {['F' | 'E', number, number][]} descriptions
 */
function getGangs(n, counts, descriptions) {
  const uf = new UnionFind(n * 2); // 放大2倍，將敵人的敵人分類放在 [n + 1, 2n]

  for (let i = 0; i < counts; i++) {
    const [type, a, b] = descriptions[i];

    if (type === 'F') {
      uf.merge(a, b); // 是朋友直接合併
    } else {
      uf.merge(a + n, b); // a 的敵人與 b 是朋友
      uf.merge(a, b + n); // a 與 b 的敵人是朋友
    }
  }

  const result = new Set();
  // 查看實際分組用
  // const group = {};

  for (let i = 1; i <= n; i++) {
    // 將實際組員放在對應的組別
    // const parent = uf.query(i);
    // if (!group[parent]) group[parent] = [];
    // group[parent].push(i);

    result.add(uf.query(i)); // 用 set 去重複
  }

  // console.log(group);

  return result.size;
}

export { getGangs };
