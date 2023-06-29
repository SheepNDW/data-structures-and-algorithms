export declare class DoublyNode<T> {
  element: T;
  next: DoublyNode<T> | null;
  prev: DoublyNode<T> | null;
  constructor(element: T);
}

export declare class DoublyList<T = unknown> {
  head: DoublyNode<T> | null;
  tail: DoublyNode<T> | null;
  length: number;

  constructor();

  size(): number;

  clear(): void;

  isEmpty(): boolean;

  getHead(): DoublyNode<T> | null;

  getTail(): DoublyNode<T> | null;

  findIndex(index: number): DoublyNode<T> | null;

  forEach(cb: (element: T, index: number) => void): void;

  insertAt(index: number, element: T): void;

  removeAt(index: number): T | null;
}
