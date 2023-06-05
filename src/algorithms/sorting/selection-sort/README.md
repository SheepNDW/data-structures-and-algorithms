# 選擇排序法（Selection Sort）

選擇排序的行為與氣泡排序相反，它每一次遍歷都是找到最小的數然後放到前面，第一次遍歷放在第一個位置，第二次遍歷放在第二個位置...依此類推。因此我們需要一個變數來記錄目前遍歷的最小值索引。

| 步驟   | 陣列狀態（刪除線代表已排序）          | 註解                                          |
| ------ | ------------------------------------- | --------------------------------------------- |
| 初始   | [ 3, 6, 4, 2, 11, 10, 5 ]             | 初始狀態                                      |
| Step 1 | [ **2**, 6, 4, **3**, 11, 10, 5 ]     | 2 是最小值，與第一個元素 3 交換               |
| Step 2 | [ ~~2~~, **3**, 4, **6**, 11, 10, 5 ] | 在剩餘元素中 3 是最小值，與第二個元素 6 交換  |
| Step 3 | [ ~~2, 3~~, **4**, 6, 11, 10, 5 ]     | 在剩餘元素中 4 是最小值，已在正確位置         |
| Step 4 | [ ~~2, 3, 4~~, **5**, 11, 10, **6** ] | 在剩餘元素中 5 是最小值，與第四個元素 6 交換  |
| Step 5 | [ ~~2, 3, 4, 5~~, **6**, 10, **11** ] | 在剩餘元素中 6 是最小值，與第五個元素 11 交換 |
| Step 6 | [ ~~2, 3, 4, 5, 6~~, **10**, 11 ]     | 在剩餘元素中 10 是最小值，已在正確位置        |
| Step 7 | [ ~~2, 3, 4, 5, 6, 10~~, **11** ]     | 在剩餘元素中 11 是最小值，已在正確位置        |
| 最終   | [ 2, 3, 4, 5, 6, 10, 11 ]             | 排序完成                                      |

這是 wiki 上的 gif 圖，可以更清楚的看到過程：

![Selection Sort](https://upload.wikimedia.org/wikipedia/commons/9/94/Selection-Sort-Animation.gif)

Selection Sort 的具體實作程式碼如下：

```js
function selectSort(array) {
  let n = array.length;
  for (let i = 0; i < n; i++) {
    let minIndex = i; // 保存目前最小值的索引
    for (let j = i + 1; j < n; j++) { // 每次只從 i 的下一個開始比較
      if (array[j] < array[minIndex]) {
        minIndex = j; // 更新最小值索引
      }
    }
    if (i !== minIndex) {
      swap(array, i, minIndex);
    }
  }
}
```

我們可以發現，氣泡排序跟選擇排序都會將目前陣列劃分成兩個部分，一個是已排序的部分，一個是未排序的部分。氣泡排序的以排序部分在陣列的尾部，而選擇排序的已排序部分在陣列的頭部。

再來嘗試從兩端同時排序會如何：

```js
function selectSort2(array) {
  let left = 0;
  let right = array.length - 1;
  let min = left; // 保存目前最小值的索引
  let max = left; // 保存目前最大值的索引

  while (left <= right) {
    min = left;
    max = left;
    // 這裡只能用 <=, 因為要取 array[right] 的值
    for (let i = left; i <= right; i++) {
      if (array[i] < array[min]) {
        min = i;
      }
      if (array[i] > array[max]) {
        max = i;
      }
    }
    swap(array, left, min);
    if (left === max) {
      max = min;
    }
    swap(array, right, max);
    left++;
    right--;
  }
}
```

用測試來看一下效能，會發現並沒有提升多少，因此我們只記住 selection sort 的原始版本就好了。將這兩種寫法與 bubble sort 去跑耗時測試：

```bash
========
部分有序的情況 bubbleSort1 91
完全亂序的情況 bubbleSort1 394
========
部分有序的情況 bubbleSort2 20
完全亂序的情況 bubbleSort2 390
========
部分有序的情況 bubbleSort3 7
完全亂序的情況 bubbleSort3 335
========
部分有序的情況 selectSort 47
完全亂序的情況 selectSort 46
========
部分有序的情況 selectSort2 37
完全亂序的情況 selectSort2 35
```

## 複雜度（Complexity）

| Name               | Average  |   Best   |  Worst   | Space  |  Method  | Stable |
| ------------------ | :------: | :------: | :------: | :----: | :------: | :----: |
| **Selection sort** | $O(n^2)$ | $O(n^2)$ | $O(n^2)$ | $O(1)$ | In-place |   No   |

## 參考資料

- [《JavaScript 算法：基本原理與代碼實現》](https://www.tenlong.com.tw/products/9787115596154?list_name=r-zh_cn)
