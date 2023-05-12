/**
 * Radix sort algorithm
 * @param {number[]} arr
 */
export function radixSort(arr) {
  const base = 10;
  let divider = 1;
  // Math.floor(x/divider) % base
  // divider *= base
  const maxValue = Math.max(...arr);
  while (divider <= maxValue) {
    const buckets = [...Array(10)].map(() => []);
    for (const value of arr) {
      buckets[Math.floor(value / divider) % base].push(value);
    }

    arr = [].concat(...buckets);

    divider *= base;
  }

  return arr;
}
