import { shuffle } from '../fisher-yates-shuffle/shuffle';

export const sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
export const reverseArr = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
export const notSortedArr = [15, 8, 5, 12, 10, 1, 16, 9, 11, 7, 20, 3, 2, 6, 17, 18, 4, 13, 14, 19];
export const equalArr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
export const negativeArr = [-1, 0, 5, -10, 20, 13, -7, 3, 2, -3];
export const negativeArrSorted = [-10, -7, -3, -1, 0, 2, 3, 5, 13, 20];

/**
 * Swap two elements in array
 * @param {unknown[]} array
 * @param {number} a - index of the first element
 * @param {number} b - index of the second element
 */
export function swap(array, a, b) {
  const temp = array[a];
  array[a] = array[b];
  array[b] = temp;
  // ES6 destructuring assignment syntax
  // [array[a], array[b]] = [array[b], array[a]];
}

/**
 * Test runtime of sorting function
 * @param {function} sortedFn
 */
export function testRuntime(sortedFn) {
  const array = [];
  // 向陣列寫入 10000 個資料，其中前 1000 個資料倒序，後 9000 個資料順序
  for (let i = 0; i < 10000; i++) {
    if (i < 1000) {
      array[i] = 1000 - i;
    } else {
      array[i] = i;
    }
  }
  console.log('========');
  let start = new Date() - 0;
  sortedFn(array);
  console.log('部分有序的情況', sortedFn.name, new Date() - start);
  shuffle(array);
  start = new Date() - 0;
  sortedFn(array);
  console.log('完全亂序的情況', sortedFn.name, new Date() - start);
}
