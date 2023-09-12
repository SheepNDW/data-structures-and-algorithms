# 循序搜尋 Sequential Search

循序或是線性搜尋（Linear Search）是最基本的搜尋演算法，它的概念是將每一個資料結構中的元素和我們要找的元素做比較，直到找到相同的元素為止。

我們在尋找過程有可能在第一個元素就找到，也有可能在最後一個元素才找到，或者是根本找不到。在最壞的情況下，我們需要將所有元素都比較一次，因此時間複雜度為 O(n)，是一種比較低效的搜尋演算法。

下面是循序搜尋的程式碼實作：

```js
const DOES_NOT_EXIST = -1;

function sequentialSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }
  return DOES_NOT_EXIST;
}
```

實作很簡單，就是直接迭代整個陣列，並將每個陣列元素和搜尋目標做比較，如果找到相同的元素，演算法就會回傳一個值來表示搜尋成功。回傳值可以是元素的索引，或者是一個布林值；如果沒有找到就回傳一個 `-1` 或 `false` 等等。
