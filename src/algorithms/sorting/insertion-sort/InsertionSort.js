/**
 * Insertion Sort algorithm
 * @param {unknown[]} array
 */
export function insertionSort(array) {
  const length = array.length;
  let temp;

  for (let i = 1; i < length; i++) {
    temp = array[i];
    let j = i;
    while (j > 0 && array[j - 1] > temp) {
      array[j] = array[j - 1];
      j--;
    }

    array[j] = temp;
  }
}
