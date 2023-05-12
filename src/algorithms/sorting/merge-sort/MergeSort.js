/**
 * Merge sort algorithm
 * @param {unknown[]} array
 */
export function mergeSort(array) {
  if (array.length > 1) {
    const length = array.length;
    const middle = Math.floor(length / 2);

    const left = mergeSort(array.slice(0, middle));
    const right = mergeSort(array.slice(middle, length));
    array = mergeSortedArrays(left, right);
  }
  return array;
}

/**
 * Merge two sorted arrays
 * @param {unknown[]} left
 * @param {unknown[]} right
 */
function mergeSortedArrays(left, right) {
  const sortedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    // if (left[leftIndex] <= right[rightIndex]) {
    //   sortedArray.push(left[leftIndex++]);
    //   leftIndex++;
    // } else {
    //   sortedArray.push(right[rightIndex++]);
    //   rightIndex++;
    // }
    sortedArray.push(
      left[leftIndex] <= right[rightIndex] ? left[leftIndex++] : right[rightIndex++]
    );
  }

  return sortedArray.concat(
    leftIndex < left.length ? left.slice(leftIndex) : right.slice(rightIndex)
  );
}
