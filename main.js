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
import { BST } from '@/data-structures/tree/binary-search-tree/BST';
// import { MinHeap } from '@/data-structures/heap/MinHeap';
// import { MaxHeap } from '@/data-structures/heap/MaxHeap';

// Algorithms
// import { bucketSort } from '@/algorithms/sorting/bucket-sort/BucketSort';
// import { radixSort } from '@/algorithms/sorting/radix-sort/RadixSort';
// import { binarySearch } from '@/algorithms/search/binary-search/binarySearch';
// import { mergeSort } from '@/algorithms/sorting/merge-sort/MergeSort';

import { coinChange } from '@/algorithms/dynamic-programming/coin-change/coinChange';

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

// const tree = new BST();

// [53, 47, 60, 10, 30, 51, 52, 50, 200, 55, 504, 56].forEach((num) => tree.insert(num));

// tree.levelOrder((node) => console.log(node.data));
// console.log(tree.toString());

// // tree.remove(1);

// console.log(tree.getNodeSize(tree.root));

// console.log(coinChange([1, 2, 5], 11));

import { UnionFind } from '@/data-structures/union-find/UnionFind';

const uf = new UnionFind(10);
console.log('初始化');
console.log(uf.toString());

console.log('連接 5, 6');
uf.merge(5, 6);
console.log(uf.toString());
console.log('連接 5, 6 之後的 weights: ');
console.log(uf.weights);

console.log('連接 1, 2');
uf.merge(1, 2);
console.log(uf.toString());
console.log('連接 1, 2 之後的 weights: ');
console.log(uf.weights);

console.log('連接 2, 3');
uf.merge(2, 3);
console.log(uf.toString());
console.log('連接 2, 3 之後的 weights: ');
console.log(uf.weights);

console.log('連接 1, 4');
uf.merge(1, 4);
console.log(uf.toString());
console.log('連接 1, 4 之後的 weights: ');
console.log(uf.weights);

console.log('連接 1, 5');
uf.merge(1, 5);
console.log(uf.toString());
console.log('連接 1, 5 之後的 weights: ');
console.log(uf.weights);

console.log('1 6 是否連接：' + uf.isConnected(1, 6));
console.log('1 8 是否連接：' + uf.isConnected(1, 8));
