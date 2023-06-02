import { swap } from '../SortTestUtils';

/**
 * Basic Bubble sort algorithm
 * @param {unknown[]} array
 */
function bubbleSort(array) {
  const length = array.length;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }
}

/**
 * Bubble sort algorithm
 * @param {*[]} array
 */
function bubbleSort1(array) {
  const n = array.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      // i 增大，內層迴圈比較次數 n - i 減少
      if (array[j] > array[j + 1]) {
        // 注意這裡索引變數都是 j
        swap(array, j, j + 1);
      }
    }
  }
}

/**
 * Bubble sort algorithm (optimized 1)
 * @param {*[]} array
 */
function bubbleSort2(array) {
  const n = array.length;
  for (let i = 0; i < n; i++) {
    let hasSorted = true;
    for (let j = 0; j < n - i; j++) {
      if (array[j] > array[j + 1]) {
        // 注意這裡索引變數都是 j
        swap(array, j, j + 1);
        hasSorted = false;
      }
    }
    if (hasSorted) {
      break;
    }
  }
}

/**
 * Bubble sort algorithm (optimized 2)
 * @param {*[]} array
 */
function bubbleSort3(array) {
  const n = array.length;
  let k = n - 1;
  let swapPos = 0;
  for (let i = 0; i < n; i++) {
    let hasSorted = true;
    for (let j = 0; j < k; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
        hasSorted = false;
        swapPos = j; // 記錄交換的位置，直接到內層迴圈最後一個被交換的元素
      }
    }
    if (hasSorted) {
      break;
    }
    k = swapPos; // 重寫內層迴圈的邊界
  }
}

/**
 * Cocktail sort algorithm
 * @param {*[]} array
 */
function cocktailSort(array) {
  let left = 0; // 陣列起始索引
  let right = array.length - 1; // 陣列索引最大值
  let index = left; // 臨時變數

  // 判斷陣列中是否有多個元素
  while (right > left) {
    let isSorted = false;
    // 每一次進到 while 迴圈，都會找出對應範圍內的最大值和最小值並分別放到對應的位置
    // 大的排到後面
    for (let i = left; i < right; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1);
        index = i; // 紀錄目前索引
        isSorted = true;
      }
    }
    right = index; // 重寫右邊界（最後一個交換的位置）
    // 小的排到前面
    for (let i = right; i > left; i--) {
      // 從最後一個交換的位置從右往左掃
      if (array[i] < array[i - 1]) {
        swap(array, i, i - 1);
        index = i;
        isSorted = true;
      }
    }
    left = index; // 重寫左邊界（最後一個交換的位置）
    if (!isSorted) {
      break;
    }
  }
}

export { bubbleSort, bubbleSort1, bubbleSort2, bubbleSort3, cocktailSort };
