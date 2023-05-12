/**
 * Quick sort algorithm
 * @param {unknown[]} array
 */
export function quickSort(array) {
  if (array.length < 2) return array;

  let pivot = array[0];
  let minArr = array.slice(1).filter((item) => item <= pivot);
  let maxArr = array.slice(1).filter((item) => item > pivot);

  return [
    ...(minArr.length > 1 ? quickSort(minArr) : minArr),
    pivot,
    ...(maxArr.length > 1 ? quickSort(maxArr) : maxArr),
  ];
}
