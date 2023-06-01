/**
 * 合併兩個有序的陣列 時間複雜度 O(n) 空間複雜度 O(1)
 * @param {number[]} src
 * @param {number[]} dest
 * @param {number} n
 * @param {number} m
 */
export function mergeArray(src, dest, n, m) {
  let indexOfNew = n + m - 1; // 新陣列的最後一個元素的索引
  let indexOfSrc = n - 1; // src 有效元素的最後一個索引
  let indexOfDest = m - 1; // dest 有效元素的最後一個索引
  // 當 dest 全部掃完，元素全部插入 src，剩餘的 src 元素不用動
  // 當 src 全部遍歷完，但 dest 仍有元素時，只需要操作 dest 即可，此時 src 索引已達最小值 0
  while (indexOfDest >= 0) {
    if (indexOfSrc >= 0) {
      // 將 src 或 dest 中較大的元素放入 src 的後幾個位置
      if (src[indexOfSrc] >= dest[indexOfDest]) {
        src[indexOfNew--] = src[indexOfSrc--];
      } else {
        src[indexOfNew--] = dest[indexOfDest--];
      }
    } else {
      // 如果 dest 比較長，那麼挪動 dest 到 indexOfNew 的位置
      src[indexOfNew--] = dest[indexOfDest--];
    }
  }
}

// const src = [1, 1, 1, 1, 1, 1, 3, 5, 7, 9];
// const dest = [2, 4, 6, 8, 10, 12];
// mergeArray(src, dest, 10, 6);
// console.log(src);
