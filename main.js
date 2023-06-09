import './style.css';
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Data Structures and Algorithms!</h1>
    <h2>Let's learn about the basics of Data Structures and Algorithms</h2>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

// import { LinkedList } from '@/data-structures/linked-list/LinkedList';
// import { DoublyLinkedList } from '@/data-structures/doubly-linked-list/DoublyLinkedList';
// import { CircularLinkedList } from '@/data-structures/circular-linked-list/CircularLinkedList';
// import { HashTable } from '@/data-structures/map/HashTable';
// import { BinarySearchTree } from '@/data-structures/tree/binary-search-tree/BinarySearchTree';
// import { MinHeap } from '@/data-structures/heap/MinHeap';
// import { MaxHeap } from '@/data-structures/heap/MaxHeap';

// Algorithms
// import { bucketSort } from '@/algorithms/sorting/bucket-sort/BucketSort';
// import { radixSort } from '@/algorithms/sorting/radix-sort/RadixSort';
// import { binarySearch } from '@/algorithms/search/binary-search/binarySearch';
// import { mergeSort } from '@/algorithms/sorting/merge-sort/MergeSort';

// const arr = [3, 4, 9, 1, 8, 2, 0, 7, 6, 5];

// mergeSort(arr);
