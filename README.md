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
- [Doubly Linked List](src/data-structures/doubly-linked-list)
- [Circular Linked List](src/data-structures/circular-linked-list)
- Tree
  - [Binary Search Tree](src/data-structures/tree/binary-search-tree)
- [Heap](src/data-structures/heap) - max and min heap versions

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
- 2023/06/09: Updated [merge sort notes](./src/algorithms/sorting/merge-sort/)
- 2023/06/06: Updated [shell sort notes](./src/algorithms/sorting/shell-sort/)
- 2023/06/05: Updated [selection sort notes](./src/algorithms/sorting/selection-sort/) & [insertion sort notes](./src/algorithms/sorting/insertion-sort/)
- 2023/06/02: Updated [bubble sort notes](./src/algorithms/sorting/bubble-sort/)
- 2023/06/01: Updated [time and space complexity notes](./src/bigO-notation-and-complexity/)
- 2023/05/12: Project initialization
