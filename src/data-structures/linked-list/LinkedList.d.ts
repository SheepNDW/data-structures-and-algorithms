export declare class Node<T> {
  element: T;
  next: Node<T> | null;
  constructor(element: T);
}

export declare class List<T = unknown> {
  head: Node<T> | null;
  length: number;
  constructor();
  size(): number;
  isEmpty(): boolean;
  clear(): void;
  forEach(cb: (el: T, index: number) => void): void;
  findIndex(index: number): Node<T> | null;
  insertAt(index: number, element: T): void;
  removeAt(index: number): void;
}

export declare class LinkedList<T = unknown> {
  head: Node<T> | null;
  length: number;
  constructor();
  /**
   * Adds a new element to the end of the list.
   */
  push(element: T): void;
  /**
   * Removes the element at the specified position in this list.
   */
  removeAt(index: number): T | null;
  /**
   * Returns the element at the specified position in this list.
   */
  getNodeAt(index: number): Node<T> | null;
  equalFn(a: T, b: T): boolean;
  /**
   * Returns the index of the first occurrence of the specified element in this list, or -1 if this list does not contain the element.
   */
  indexOf(element: T): number;
  /**
   * Removes the first occurrence of the specified element from this list, if it is present.
   * If the list does not contain the element, it is unchanged.
   */
  remove(element: T): T | null;
  /**
   * Inserts the specified element at the specified position in this list.
   */
  insert(index: number, element: T): boolean;
  size(): number;
  isEmpty(): boolean;
}
