# JavaScript Data Structures and Algorithms

此儲存庫為學習 JavaScript 資料結構與演算法的筆記和程式碼。

## Data Structures

- [Stack](src/data-structures/stack)
- [Queue](src/data-structures/queue)
- [Set](src/data-structures/set)
- Map
  - [Dictionary](src/data-structures/map/dictionary)
  - [Hash Table](src/data-structures/map/hash-table)
- [Linked List](src/data-structures/linked-list)
  - [Doubly Linked List](src/data-structures/linked-list/doubly-linked-list/)
  - [Circular Linked List](src/data-structures/linked-list/circular-linked-list)
- Tree
  - [Binary Search Tree](src/data-structures/tree/binary-search-tree)
- [Heap](src/data-structures/heap) - max and min heap versions
- [bitmap](src/data-structures/bitmap)

## Algorithms

- Sorting
  - [Bubble Sort](src/algorithms/sorting/bubble-sort)
  - [Selection Sort](src/algorithms/sorting/selection-sort)
  - [Insertion Sort](src/algorithms/sorting/insertion-sort)
  - [Merge Sort](src/algorithms/sorting/merge-sort)
  - [Quick Sort](src/algorithms/sorting/quick-sort)
  - [Counting Sort](src/algorithms/sorting/counting-sort)
  - [Bucket Sort](src/algorithms/sorting/bucket-sort)
  - [Radix Sort](src/algorithms/sorting/radix-sort)
  - [Shell Sort](src/algorithms/sorting/shell-sort)
- Searches
  - [Sequential Search](src/algorithms/search/sequential-search)
  - [Binary Search](src/algorithms/search/binary-search)
- Greedy
  - [Fractional Knapsack](src/algorithms/greedy/fractional-knapsack)
- Backtracking
  - [Word Search](src/algorithms/backtracking/word-search)
- Dynamic Programming
  - [0/1 Knapsack Problem](src/algorithms/dynamic-programming/knapsack-problem)
  - [Longest Common Subsequence (LCS)](src/algorithms/dynamic-programming/longest-common-subsequence)
- [Fisher-Yates Shuffle](src/algorithms/fisher-yates-shuffle) - random array permutation

## How to use this repository

**Install dependencies**

```bash
pnpm install
```

**Run tests**

```bash
pnpm test
```

or watch tests with vitest ui (recommended)

```bash
pnpm run test:ui
```

**Debug in browser**

```bash
pnpm dev
```

import the file you want to debug in `main.js`, and print the result in the console.

## Changelog

- ...
- 2023/07/14: Updated [bitmap notes](./src/data-structures/bitmap)
- 2023/07/05: Updated [stack notes](./src/data-structures/stack)
- 2023/07/04: Updated [linked list sorting notes](./src/data-structures/linked-list/sorting)
- 2023/06/30: Updated [circular linked list notes](./src/data-structures/linked-list/circular-linked-list)
- 2023/06/29: Updated [doubly linked list notes](./src/data-structures/linked-list/doubly-linked-list/)
- 2023/06/28: Updated [linked list notes](./src/data-structures/linked-list/)
- 2023/06/26: Updated [radix sort notes](./src/algorithms/sorting/radix-sort/)
- 2023/06/23: Updated [bucket sort notes](./src/algorithms/sorting/bucket-sort/)
- 2023/06/19: Updated [counting sort notes](./src/algorithms/sorting/counting-sort/)
- 2023/06/15: Updated [quick sort notes](./src/algorithms/sorting/quick-sort/)
- 2023/06/09: Updated [merge sort notes](./src/algorithms/sorting/merge-sort/)
- 2023/06/06: Updated [shell sort notes](./src/algorithms/sorting/shell-sort/)
- 2023/06/05: Updated [selection sort notes](./src/algorithms/sorting/selection-sort/) & [insertion sort notes](./src/algorithms/sorting/insertion-sort/)
- 2023/06/02: Updated [bubble sort notes](./src/algorithms/sorting/bubble-sort/)
- 2023/06/01: Updated [time and space complexity notes](./src/bigO-notation-and-complexity/)
- 2023/05/12: Project initialization
