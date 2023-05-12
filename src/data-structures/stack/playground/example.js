import { Stack } from '../Stack';

/**
 * Converts a decimal number to binary.
 * @param {number} decimalNumber
 * @returns {string}
 */
export function decimalToBinary(decimalNumber) {
  const stack = new Stack();
  let number = decimalNumber;
  let binaryString = '';

  while (number > 0) {
    stack.push(number % 2);
    number = Math.floor(number / 2);
  }

  while (!stack.isEmpty()) {
    binaryString += stack.pop();
  }

  return binaryString || '0';
}

/**
 * Converts a decimal number to any base.
 * @param {number} dec
 * @param {number} base
 * @returns {string}
 */
export function convertDecimalToBase(dec, base) {
  const stack = new Stack();
  let number = dec;
  let binaryString = '';
  const digits = '0123456789ABCDEF';

  while (number > 0) {
    stack.push(number % base);
    number = Math.floor(number / base);
  }

  while (!stack.isEmpty()) {
    binaryString += digits[stack.pop()];
  }

  return binaryString || '0';
}
