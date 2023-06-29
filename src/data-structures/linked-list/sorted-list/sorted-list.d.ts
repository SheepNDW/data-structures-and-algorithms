import { DoublyList, DoublyNode } from '../doubly-linked-list/DoublyLinkedList';

export declare class SortedList<T = unknown> extends DoublyList<T> {
  find(value: T, second?: Symbol): DoublyNode<T> | undefined;
  insert(value: T): void;
  remove(value: T): boolean;
}
