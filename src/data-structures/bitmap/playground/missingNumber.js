import { BitMap } from '../Bitmap';

/**
 * @param {number[]} nums
 * @param {number} a
 * @param {number} b
 */
function missingNumber1(nums, a, b) {
  const bitmap = new BitMap(nums);
  const lost = [];

  for (let i = a; i < b; i++) {
    if (bitmap.get(i) === 0) {
      lost.push(i);
    }
  }

  return lost;
}

/**
 * @param {number[]} nums
 * @param {number} a
 * @param {number} b
 */
function missingNumber2(nums, a, b) {
  const str = [];
  nums.forEach((num) => {
    str[num] = 1;
  });

  const lost = [];
  for (let i = a; i < b; i++) {
    if (str[i] == null) {
      lost.push(i);
    }
  }

  return lost;
}

/**
 * 只遺失一個數
 * @param {number[]} nums
 */
function missingNumber(nums) {
  if (nums.length === 0) return 0;
  const sum = nums.reduce((acc, cur) => acc + cur);
  const n = nums.length + 1;
  return (n * (n + 1)) / 2 - sum;
}

export { missingNumber1, missingNumber2, missingNumber };
