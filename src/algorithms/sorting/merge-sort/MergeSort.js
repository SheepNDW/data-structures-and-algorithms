/**
 * Merge sort algorithm
 * @param {number[]} array
 * @param {boolean} [toMerge]
 */
function mergeSort(array, toMerge) {
  // 如果陣列還可以分割，並且處於分割模式
  if (array.length > 1 && toMerge !== true) {
    const top = array;
    const mid = array.length >> 1;
    top.left = array.slice(0, mid);
    top.right = array.slice(mid);
    top.left.top = top;
    top.right.top = top;
    // console.log(top.left, top.right, '分割');
    mergeSort(top.left);
    mergeSort(top.right);
    // 如果陣列只剩下一個或是處於合併模式
  } else if (array.length === 1 || toMerge) {
    if (array.top && !array.merged) {
      // 如果左邊合併了右邊，那麼右邊就不用再合併左邊
      const isLeft = array === array.top.left;
      const neighbor = isLeft ? array.top.right : array.top.left;
      if (neighbor.length === 1 || neighbor.sorted) {
        const temp = mergeArray(array, neighbor);
        neighbor.merged = true; // 記錄已經合併過了
        // console.log(temp, '合併');
        for (let i = 0; i < temp.length; i++) {
          array.top[i] = temp[i];
        }
        array.top.sorted = true;
        mergeSort(array.top, true);
      }
    }
  }
}

/**
 * Merge two arrays
 * @param {number[]} arrA
 * @param {number[]} arrB
 */
function mergeArray(arrA, arrB) {
  const lengthA = arrA.length - 1;
  const lengthB = arrB.length - 1;
  const mergedArr = [];
  let indexA = 0;
  let indexB = 0;
  let indexMerged = 0;

  while (indexA <= lengthA && indexB <= lengthB) {
    // 先比較兩個陣列等長的部分，看誰的元素小，就先放入 mergedArray
    mergedArr[indexMerged++] = arrA[indexA] < arrB[indexB] ? arrA[indexA++] : arrB[indexB++];
  }

  // 可能是 arrB 先跑完，此時 arrA 還有剩
  while (indexA <= lengthA) {
    mergedArr[indexMerged++] = arrA[indexA++];
  }
  // 也可能是 arrA 先跑完，此時 arrB 還有剩
  while (indexB <= lengthB) {
    mergedArr[indexMerged++] = arrB[indexB++];
  }

  return mergedArr;
}

/**
 * Merge sort algorithm with object
 * @param {number[]} array
 */
function mergeSortObject(array) {
  function sort(obj, toMerge) {
    // 如果陣列還可以分割，並且處於分割模式
    const { array, begin, end } = obj;
    const n = end - begin;
    if (n !== 0 && toMerge !== true) {
      const mid = begin + (n >> 1);
      obj.left = {
        begin: begin,
        end: mid,
        array: array,
        top: obj,
      };
      obj.right = {
        begin: mid + 1,
        end: end,
        array: array,
        top: obj,
      };
      sort(obj.left);
      sort(obj.right);
      // 如果陣列只剩下一個或是處於合併模式
    } else if (n === 0 || toMerge) {
      if (obj.top && !obj.merged) {
        // 如果左邊合併了右邊，那麼右邊就不用再合併左邊
        const top = obj.top;
        const isLeft = obj === top.left;
        const neighbor = isLeft ? top.right : top.left;
        if (neighbor.end == neighbor.begin || neighbor.sorted) {
          const temp = mergeArrayByIndex(array, begin, end, neighbor.begin, neighbor.end);
          neighbor.merged = true;
          const b = top.begin;
          for (let i = 0; i < temp.length; i++) {
            array[b + i] = temp[i];
          }
          top.sorted = true;
          sort(top, true);
        }
      }
    }
  }
  sort({
    array: array,
    begin: 0,
    end: array.length - 1,
  });
  return array;
}

function mergeArrayByIndex(arr, begin, end, begin2, end2) {
  let indexA = begin;
  let indexB = begin2;
  let indexMerged = 0;
  const mergedArr = [];

  while (indexA <= end && indexB <= end2) {
    // 先比較兩個陣列等長的部分，看誰的元素小，就先放入 mergedArray
    mergedArr[indexMerged++] = arr[indexA] < arr[indexB] ? arr[indexA++] : arr[indexB++];
  }

  while (indexA <= end) {
    mergedArr[indexMerged++] = arr[indexA++];
  }

  while (indexB <= end2) {
    mergedArr[indexMerged++] = arr[indexB++];
  }

  return mergedArr;
}

/**
 * Merge sort algorithm with object (optimized)
 * @param {number[]} array
 */
function mergeSortObject2(array) {
  function sort(obj, toMerge) {
    // 如果陣列還可以分割，並且處於分割模式
    const { array, begin, end } = obj;
    const n = end - begin;
    if (n !== 0 && toMerge !== true) {
      const mid = begin + (n >> 1);
      obj.left = {
        begin: begin,
        end: mid,
        array: array,
      };
      obj.right = {
        begin: mid + 1,
        end: end,
        array: array,
      };
      sort(obj.left);
      sort(obj.right);
      const temp = mergeArrayByIndex(array, begin, mid, mid + 1, end);
      for (let i = 0; i < temp.length; i++) {
        array[begin + i] = temp[i];
      }
    }
  }
  sort({
    array: array,
    begin: 0,
    end: array.length - 1,
  });
  return array;
}

/**
 * Merge sort algorithm (final)
 * @param {number[]} array
 */
function mergeSortSimple(array) {
  function sort(array, begin, end) {
    // 如果陣列還可以分割，並且處於分割模式
    if (begin !== end) {
      const mid = begin + ((end - begin) >> 1);
      sort(array, begin, mid);
      sort(array, mid + 1, end);
      const temp = mergeArrayByIndex(array, begin, mid, mid + 1, end);
      for (let i = 0; i < temp.length; i++) {
        array[begin + i] = temp[i];
      }
    }
  }
  sort(array, 0, array.length - 1);
  return array;
}

// ====================
// Alternative version
// ====================
/**
 * Merge sort algorithm use slice and concat
 * @param {number[]} array
 */
function mergeSort2(array) {
  if (array.length > 1) {
    const n = array.length;
    // const middle = Math.floor(length / 2);
    const middle = n >> 1;

    const left = mergeSort2(array.slice(0, middle));
    const right = mergeSort2(array.slice(middle, n));
    // Merge the sorted arrays into a new one
    array = mergeSortedArrays(left, right);

    // Merge the sorted arrays into the original one
    // const temp = mergeSortedArrays(left, right);
    // for (let i = 0; i < temp.length; i++) {
    //   array[i] = temp[i];
    // }
  }
  return array;
}

/**
 * Merge two sorted arrays
 * @param {number[]} left
 * @param {number[]} right
 */
function mergeSortedArrays(left, right) {
  const sortedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    sortedArray.push(
      left[leftIndex] <= right[rightIndex] ? left[leftIndex++] : right[rightIndex++]
    );
  }

  return sortedArray.concat(
    leftIndex < left.length ? left.slice(leftIndex) : right.slice(rightIndex)
  );
}

export { mergeSort, mergeSortObject, mergeSortObject2, mergeSortSimple, mergeSort2 };
