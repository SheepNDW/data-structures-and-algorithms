/**
 * Insertion Sort algorithm
 * @param {number[]} array
 */
function insertionSort(array) {
  const n = array.length;
  for (let i = 1; i < n; i++) {
    const target = array[i];
    let j;
    // 合併兩個內部迴圈
    for (j = i - 1; j >= 0 && array[j] > target; j--) {
      array[j + 1] = array[j]; // 挪出空位
    }
    array[j + 1] = target; // 插入目標值
  }
}

/**
 * Insertion Sort algorithm (while loop)
 * @param {number[]} array
 */
function insertionSort2(array) {
  const n = array.length;
  for (let i = 1; i < n; i++) {
    const target = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > target) {
      array[j + 1] = array[j]; // 前面覆蓋後面
      j--;
    }
    array[j + 1] = target; // 插入目標值
  }
}

export { insertionSort, insertionSort2 };
