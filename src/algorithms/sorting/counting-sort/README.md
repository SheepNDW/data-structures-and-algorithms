# 計數排序法（Counting Sort）

前面學到的 Bubble Sort、Insertion Sort、Selection Sort、Merge Sort、Quick Sort 都是比較排序法，換言之，我們都需要在排序過程中比較兩個元素的大小，它們的時間複雜度頂多到 $O(n \log n)$。接下來看到的三種排序法，如果我們排序的元素是純數字，時間複雜度還可以達到驚人的 $O(n)$。

Counting Sort 需要佔用大量的記憶體空間，它僅適合用於資料比較集中的情況，例如 [0 ~ 100]、[10000 ~ 19999] 這樣的資料。

接下來我們來看一下 Counting Sort 是怎麼運作的。假設我們有 [1, 2, 3, 1, 0, 4] 這六個數字，這裡面最大值是 4，那麼我們建立一個長度為 5 的陣列，每個元素預設為 0。這相當於選舉排序，一共有 5 個投票桶，1 就投 1 號桶，0 就投 0 號桶。注意，這些桶本來就是有順序的，並且桶的編號就代表原陣列的值。當全部投完時，0 號桶有 1 個，1 號桶有 2 個，2 號桶有 1 個，3 號桶有 1 個，4 號桶有 1 個。接下來我們只要依序把桶裡的數字取出來放到新陣列，就神奇地排好序了。

Counting Sort 沒有對元素進行比較，只是利用了桶與元素的一一對應關係，根據桶已經排好順序的先決條件，直接把元素放到正確的位置上。

我們來看下面這段對 `[9, 8, 5, 7, 16, 8, 6, 13, 14]` 進行了 Counting Sort 的程式碼：

```js
function countSort(array) {
  const buckets = [];
  const n = array.length;
  for (let i = 0; i < n; i++) {
    const el = array[i];
    buckets[el] = buckets[el] ? buckets[el] + 1 : 1;
  }
  console.log(buckets);
  let index = 0;
  // 遍歷所有 bucket
  for (let i = 0; i < buckets.length; i++) {
    let time = buckets[i];
    while(time) { // 如果 bucket 裡有東西，就把它拿出來
      array[index++] = i; // 將索引值當作元素，覆蓋 index 位置的元素
      time--;
    }
  }
  return array;
}
const arr = countSort([9, 8, 5, 7, 16, 8, 6, 13, 14]);
console.log(arr);
```

執行上面的程式碼後可以得到下面的結果：

```text
[empty × 5, 1, 1, 1, 2, 1, empty × 3, 1, 1, empty, 1]
[5, 6, 7, 8, 8, 9, 13, 14, 16]
```

但這裡存在幾個問題：

1. 如果要排序的陣列最小元素不是從 0 開始，如上面的例子，那麼 buckets 開始的部分就會有很多空的元素。
2. 陣列的索引值是從 0 開始的，意味著我們的元素也要大於或等於 0。如果出現負數的情況要怎麼處裡呢？

完整的實作步驟如下：

1. 找出目前陣列中的最大值和最小值。
2. 統計陣列中每個值為 i 的元素出現的次數，存入 buckets 的第 i 個位置。
3. 對所有的計數累加（從 buckets 的第一個元素開始，每一個元素和前一個元素相加）。
4. 反向遍歷原陣列：將每個元素 i 放在新陣列的第 `buckets[i]` 個位置，每放一個元素就將 `buckets[i]` 減去 1。

新的程式碼如下：

```js
function countSort(array) {
  const n = array.length;
  let max = array[0];
  let min = array[0];
  for (let i = 1; i < n; i++) {
    if (max < array[i]) max = array[i];
    if (min > array[i]) min = array[i];
  }
  const size = max - min + 1;
  const buckets = new Array(size).fill(0);
  // 遍歷所有 bucket
  for (let i = 0; i < n; i++) {
    buckets[array[i] - min]++;
  }
  for (let i = 1; i < size; i++) {
    // 累加前面所有 bucket 的值
    buckets[i] += buckets[i - 1];
  }
  const result = []; // 逆向遍歷原陣列（保證穩定性）
  for (let i = n - 1; i >= 0; i--) {
    result[--buckets[array[i] - min]] = array[i];
  }
  return result;
}
```

## 複雜度（Complexity）

| Name              |  Average   |    Best    |   Worst    |   Space    |  Method   | Stable |
| ----------------- | :--------: | :--------: | :--------: | :--------: | :-------: | :----: |
| **Counting sort** | $O(n + k)$ | $O(n + k)$ | $O(n + k)$ | $O(n + k)$ | Out-place |  Yes   |
> k 為桶（bucket）的個數

## 參考資料

- [《JavaScript 算法：基本原理與代碼實現》](https://www.tenlong.com.tw/products/9787115596154?list_name=r-zh_cn)
