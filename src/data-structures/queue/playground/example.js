import { Queue } from '../Queue';
import { Deque } from '../Deque';

/**
 * Returns the winner of the pass game.
 * @param {Array<string>} participants
 * @param {number} num
 * @return {string}
 */
export function passGame(participants, num) {
  const queue = new Queue();
  participants.forEach((item) => queue.enqueue(item));

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    queue.dequeue();
  }

  return queue.dequeue();
}

/**
 * check if the string is palindrome
 * @param {string} str
 * @return {boolean}
 * @example
 * palindromeChecker('abcba') // true
 * palindromeChecker('abcdba') // false
 * palindromeChecker('') // true
 */
export function palindromeChecker(str) {
  // NOTE: split(' ').join('') is to remove the space in the string
  const lowerStr = str.toLocaleLowerCase().split(' ').join('');

  const deque = new Deque();

  for (let i = 0; i < lowerStr.length; i++) {
    deque.addBack(lowerStr[i]);
  }

  while (deque.size() > 1) {
    if (deque.removeFront() !== deque.removeBack()) {
      return false;
    }
  }

  return true;
}
