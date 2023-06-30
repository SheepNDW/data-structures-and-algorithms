import { DoublyList, DoublyNode } from '../doubly-linked-list/DoublyLinkedList';

export declare class CircularLink<T = unknown> extends DoublyList<T> {
  forEach(cb: (element: T, index: number) => void): void;
  findIndex(index: number): DoublyNode<T> | null;
  insertAt(index: number, element: T): void;
  removeAt(index: number): boolean;
}
