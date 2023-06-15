import { partition3 as partition } from '../QuickSort';

/**
 * find the top k smallest elements in an array
 * @param {number[]} array
 * @param {number} k
 * @return {number[]}
 */
function getTopK(array, k) {
  if (array.length >= k) {
    let low = 0;
    let high = array.length - 1;
    let pivot = partition(array, low, high);
    // 不斷調整分治的範圍，直到 pivot 的 index 等於 k - 1
    while (pivot !== k - 1) {
      // 大了，往左(前)邊調整
      if (pivot > k - 1) {
        high = pivot - 1;
        pivot = partition(array, low, high);
      }
      // 小了，往右(後)邊調整
      if (pivot < k - 1) {
        low = pivot + 1;
        pivot = partition(array, low, high);
      }
    }

    let result = [];
    for (let i = 0; i < k; i++) {
      result[i] = array[i];
    }
    return result;
  }
}

/**
 * 思路：
 * partition 函式會回傳一個 pivot，這個 pivot 左邊的元素都比 pivot 小，右邊的元素都比 pivot 大，
 * 不斷地呼叫 partition 函式，直到 pivot 的 index 等於 k - 1，
 * 此時 pivot 前面的 k 個元素就是(0 ~ k - 1)就是前 k 個最小的元素
 */

export { getTopK };
