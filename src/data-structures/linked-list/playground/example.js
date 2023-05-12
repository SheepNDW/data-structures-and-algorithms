import { LinkedList } from '../LinkedList';

// ==== Linked list version ====
export function palindromeCheckerLinkedlist(str) {
  // NOTE: split(' ').join('') is to remove the space in the string
  const lowerStr = str.toLocaleLowerCase().split(' ').join('');

  const deque = new LinkedList();

  for (let i = 0; i < lowerStr.length; i++) {
    deque.push(lowerStr[i]);
  }

  while (deque.size() > 1) {
    if (deque.removeAt(0) !== deque.removeAt(deque.size() - 1)) {
      return false;
    }
  }

  return true;
}

export function passGameLinkedlist(participants, num) {
  const queue = new LinkedList();
  participants.forEach((item) => queue.push(item));

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.push(queue.removeAt(0));
    }
    queue.removeAt(0);
  }

  return queue.removeAt(0);
}
