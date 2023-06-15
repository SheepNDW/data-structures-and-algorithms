import { swap } from '../SortTestUtils';

/**
 * Quick sort algorithm
 * @param {number[]} array
 */
function quickSortSimple(array) {
  if (array.length < 2) return array;

  let pivot = array[0];
  // const minArr = array.slice(1).filter((item) => item <= pivot);
  // const maxArr = array.slice(1).filter((item) => item > pivot);
  const minArr = [];
  const maxArr = [];
  for (let i = 1; i < array.length; i++) {
    if (array[i] <= pivot) {
      minArr.push(array[i]);
    } else {
      maxArr.push(array[i]);
    }
  }

  return [
    ...(minArr.length > 1 ? quickSort(minArr) : minArr),
    pivot,
    ...(maxArr.length > 1 ? quickSort(maxArr) : maxArr),
  ];
}

/**
 * Quick sort algorithm
 * @param {number[]} array
 */
function quickSort(array) {
  function QuickSort(array, left, right) {
    if (left < right) {
      let index = partition(array, left, right);
      QuickSort(array, left, index - 1);
      QuickSort(array, index + 1, right);
    }
  }

  QuickSort(array, 0, array.length - 1);
  return array;
}

/**
 * Quick sort algorithm (stack version)
 * @param {number[]} array
 */
function quickSortStack(array) {
  function _quickSortStack(array, start, end) {
    const stack = [];
    stack.push(end);
    stack.push(start);
    while (stack.length) {
      const left = stack.pop();
      const right = stack.pop();
      const index = partition(array, left, right);
      if (left < index - 1) {
        stack.push(index - 1);
        stack.push(left);
      }
      if (right > index + 1) {
        stack.push(right);
        stack.push(index + 1);
      }
    }
  }
  _quickSortStack(array, 0, array.length - 1);
  return array;
}

/**
 * get median of three
 * @param {number[]} array
 * @param {number} left
 * @param {number} right
 */
function getMid(array, left, right) {
  const mid = left + ((right - left) >> 1);
  if (array[left] <= array[right]) {
    if (array[mid] < array[left]) {
      return left;
    } else if (array[mid] > array[right]) {
      return right;
    } else {
      return mid;
    }
  } else {
    if (array[mid] < array[right]) {
      return right;
    } else if (array[mid] > array[left]) {
      return left;
    } else {
      return mid;
    }
  }
}

/**
 * Partition array (左右指標法)
 * @param {number[]} array - array to partition
 * @param {number} left - left index
 * @param {number} right - right index
 * @returns {number} index of pivot
 */
function partition(array, left, right) {
  const mid = getMid(array, left, right);
  swap(array, mid, right); // 把 pivot 移到最右邊
  const pivot = array[right];
  let pivotIndex = right;

  while (left < right) {
    while (left < right && array[left] <= pivot) {
      // 1. 防止越界需要 left < right
      // 2. array[left] <= pivot 因為可能存在相同元素
      left++; // 找到比 pivot 大的數
    }
    while (left < right && array[right] >= pivot) {
      right--; // 找到比 pivot 小的數
    }
    swap(array, left, right);
  }
  // 最後一個比 pivot 大的 left 元素要與 pivot 交換
  swap(array, left, pivotIndex);
  return left; // 回傳的是中間的位置
}

/**
 * Partition array (挖坑法)
 * @param {number[]} array - array to partition
 * @param {number} left - left index
 * @param {number} right - right index
 * @returns {number} index of pivot
 */
function partition2(array, left, right) {
  const mid = getMid(array, left, right);
  swap(array, mid, right); // 把 pivot 移到最右邊
  const pivot = array[right]; // 坑位為 array[right]
  while (left < right) {
    while (left < right && array[left] <= pivot) {
      left++;
    }
    array[right] = array[left]; // 坑位變成 array[left]
    while (left < right && array[right] >= pivot) {
      right--;
    }
    array[left] = array[right]; // 坑位變成 array[right]
  }
  array[right] = pivot;
  return left;
}

/**
 * Partition array (前後指標法)
 * @param {number[]} array - array to partition
 * @param {number} left - left index
 * @param {number} right - right index
 * @returns {number} index of pivot
 */
function partition3(array, left, right) {
  const pivot = array[right];
  let curr = left; // 找比 pivot 大的數
  let prev = curr - 1; // 找比 pivot 小的數

  while (curr <= right) {
    if (array[curr] <= pivot && ++prev !== curr) {
      swap(array, prev, curr);
    }
    curr++;
  }
  return prev;
}

export { quickSort, quickSortSimple, quickSortStack };
