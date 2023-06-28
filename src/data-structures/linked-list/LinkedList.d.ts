export declare class Node<T = any> {
  element: T;
  next: Node<T> | null;
  constructor(element: T);
}

export declare class List<T = any> {
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
