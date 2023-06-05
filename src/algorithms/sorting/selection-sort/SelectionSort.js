import { swap } from '@/algorithms/sorting/SortTestUtils';

/**
 * Selection sort algorithm
 * @param {number[]} array
 */
function selectSort(array) {
  let n = array.length;
  for (let i = 0; i < n; i++) {
    let minIndex = i; // 保存目前最小值的索引
    for (let j = i + 1; j < n; j++) {
      // 每次只從 i 的下一個開始比較
      if (array[j] < array[minIndex]) {
        minIndex = j; // 更新最小值索引
      }
    }
    if (i !== minIndex) {
      swap(array, i, minIndex);
    }
  }
}

/**
 * Selection sort algorithm (double ended)
 * @param {number[]} array
 */
function selectSort2(array) {
  let left = 0;
  let right = array.length - 1;
  let min = left; // 保存目前最小值的索引
  let max = left; // 保存目前最大值的索引

  while (left <= right) {
    min = left;
    max = left;
    // 這裡只能用 <=, 因為要取 array[right] 的值
    for (let i = left; i <= right; i++) {
      if (array[i] < array[min]) {
        min = i;
      }
      if (array[i] > array[max]) {
        max = i;
      }
    }
    swap(array, left, min);
    if (left === max) {
      max = min;
    }
    swap(array, right, max);
    left++;
    right--;
  }
}

export { selectSort, selectSort2 };
