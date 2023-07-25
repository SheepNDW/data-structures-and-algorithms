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

// import { LinkedList, List } from '@/data-structures/linked-list/LinkedList';
import { DoublyList } from '@/data-structures/linked-list/doubly-linked-list/DoublyLinkedList';
import { insertSort } from '@/data-structures/linked-list/sorting/insertion-sort';
import { bubbleSort } from '@/data-structures/linked-list/sorting/bubble-sort';
// import { CircularLink } from '@/data-structures/linked-list/circular-linked-list/CircularLinkedList';
// import { HashTable } from '@/data-structures/map/HashTable';
import { Hash } from '@/data-structures/map/hash-table/chaining/Hash';
// import { BinarySearchTree } from '@/data-structures/tree/binary-search-tree/BinarySearchTree';
import { Tree } from '@/data-structures/tree/binary-tree/Tree';
// import { MinHeap } from '@/data-structures/heap/MinHeap';
// import { MaxHeap } from '@/data-structures/heap/MaxHeap';

// Algorithms
// import { bucketSort } from '@/algorithms/sorting/bucket-sort/BucketSort';
// import { radixSort } from '@/algorithms/sorting/radix-sort/RadixSort';
// import { binarySearch } from '@/algorithms/search/binary-search/binarySearch';
// import { mergeSort } from '@/algorithms/sorting/merge-sort/MergeSort';

// const names = ['First Name', 'Last Name', 'address', 'phone', 'k101', 'k110'];

// const descs = ['Kobe', 'Bryant', 'USA', '26300788', 'Value1', 'Value2'];

// const hash = new Hash();

// for (let i = 0; i < 6; i++) {
//   hash.insert(names[i], descs[i]);
// }
// console.log('we should see ', hash.get('k110'));
// hash.insert('phone', '9433120451'); // 這裡計算的 hash 是碰撞的，是為了測試碰撞情況下的插入
// console.log('we have ', hash.get('k101'), 'and', hash.get('phone'));

// hash.forEach((key, value) => {
//   console.log(key, value);
// });

const tree = new Tree();

tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);
tree.insert(6);
tree.insert(7);
tree.insert(8);

// tree.remove(1);

console.log(tree.getNodeSize(tree.root));
