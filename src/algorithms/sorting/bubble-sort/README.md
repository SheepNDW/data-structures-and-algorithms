# 氣泡排序法（Bubble Sort）

氣泡排序（Bubble Sort）是一種簡單、直觀的排序演算法，其取名源於自然界中的水中的氣泡在上升的過程中會不斷變大的現象。

氣泡排序的行為類似一個雙重迴圈，外迴圈控制迭代回合數，內迴圈則控制每回合的比較次數，每回合都會將最大的元素「浮」到陣列的最後面。

![Algorithm Visualization](https://upload.wikimedia.org/wikipedia/commons/c/c8/Bubble-sort-example-300px.gif)

具體步驟為：

1. 比較第 1 個數與第 2 個數，若第 1 個數大於第 2 個數則交換位置。
2. 比較第 2 個數與第 3 個數，這時第 2 個數應該是第 1 個數和第 2 個數的最大值，它們會重複步驟 1 的行為，將比較大的數放到最後，依此類推直到倒數第 1 個數與倒數第 2 個數比較完畢，最後，末位的數就是陣列中最大的數。這是第一次迭代。
3. 開始下一次迭代，陣列有 n 個元素，就遍歷 n - 1 次。

用程式碼實作一下 bubble sort，我們需要使用雙重迴圈，每次從 0 開始，然後到 n 結束：

```js
function bubbleSort1(array) {
  const n = array.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) { // i 增大，內層迴圈比較次數 n - i 減少
      if (array[j] > array[j + 1]) { // 注意這裡索引變數都是 j
        swap(array, j, j + 1);
      }
    }
  }
}
```

### 最佳化方案 1

如果原陣列就是有序的，例如 `[1, 2, 3, 4]`，那麼我們在內層迴圈可以引入一個存取標誌，如果在一次外層迴圈中，滿足比較條件則進行交換，然後更改標誌。如果在一次外層迴圈中，沒有進行過交換，那麼就代表陣列已經有序，可以提前結束迴圈。

```js
function bubbleSort2(array) {
  const n = array.length;
  for (let i = 0; i < n; i++) {
    let hasSorted = true;
    for (let j = 0; j < n - i; j++) {
      if (array[j] > array[j + 1]) {
        // 注意這裡索引變數都是 j
        swap(array, j, j + 1);
        hasSorted = false;
      }
    }
    if (hasSorted) {
      break;
    }
  }
}
```

### 最佳化方案 2

還有沒有近一步改進的地方呢？ 我們留意操作步驟的最後一句，其中提到，每次排序結束，最後一個元素都是最大的，即大數下沉的策略。當交換時，可以利用臨時變數 `swapPos` 紀錄交換位置。在內層迴圈結束後，將最後一個交換元素的位置賦值給 `k`，這樣可節省下一輪內層迴圈從 `k` 到 `n - i` 的比較：

```js
function bubbleSort3(array) {
  const n = array.length;
  let k = n - 1;
  let swapPos = 0;
  for (let i = 0; i < n; i++) {
    let hasSorted = true;
    for (let j = 0; j < k; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
        hasSorted = false;
        swapPos = j; // 記錄交換的位置，直接到內層迴圈最後一個被交換的元素
      }
    }
    if (hasSorted) {
      break;
    }
    k = swapPos; // 重寫內層迴圈的邊界
  }
}
```

### 雞尾酒排序法（Cocktail Sort）

如果我們要將剛才的繼續進行最佳化，前人發明了一種雙向的氣泡排序法，稱為雞尾酒排序法，又叫搖晃排序法（Shaker Sort）。它是氣泡排序的一種變形，與氣泡排序不同之處在於排序時是以雙向在序列中進行排序。具體可以透過範例來了解：

```js
function cocktailSort(array) {
  let left = 0; // 陣列起始索引
  let right = array.length - 1; // 陣列索引最大值
  let index = left; // 臨時變數

  // 判斷陣列中是否有多個元素
  while (right > left) {
    let isSorted = false;
    // 每一次進到 while 迴圈，都會找出對應範圍內的最大值和最小值並分別放到對應的位置
    // 大的排到後面
    for (let i = left; i < right; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1);
        index = i; // 紀錄目前索引
        isSorted = true;
      }
    }
    right = index; // 重寫右邊界（最後一個交換的位置）
    // 小的排到前面
    for (let i = right; i > left; i--) { // 從最後一個交換的位置從右往左掃
      if (array[i] < array[i - 1]) {
        swap(array, i, i - 1);
        index = i;
        isSorted = true;
      }
    }
    left = index; // 重寫左邊界（最後一個交換的位置）
    if (!isSorted) {
      break;
    }
  }
}
```

這個排序方式在完全亂序的情況下，效率比氣泡排序高，同時兩端排序的思路也是其他排序沿襲的重要思路。

最後來看四種 bubble sort 的效率比較（可以實際去執行[測試](./BubbleSort.spec.js)看控制台輸出結果）：

```bash
========
部分有序的情況 bubbleSort1 82
完全亂序的情況 bubbleSort1 401
========
部分有序的情況 bubbleSort2 21
完全亂序的情況 bubbleSort2 396
========
部分有序的情況 bubbleSort3 7
完全亂序的情況 bubbleSort3 340
========
部分有序的情況 cocktailSort 7
完全亂序的情況 cocktailSort 290
```

## 複雜度（Complexity）

氣泡排序的複雜度是 $O(n^2)$，但在最好的情況下能達到 $O(n)$，因為它至少要跑一次迴圈掃過每個元素的位置判斷是否需要交換。

| Name            | Average  |  Best  |  Worst   | Space  |  Method  | Stable |
| --------------- | :------: | :----: | :------: | :----: | :------: | :----: |
| **Bubble sort** | $O(n^2)$ | $O(n)$ | $O(n^2)$ | $O(1)$ | In-place |  Yes   |

## 參考資料

- [《JavaScript 算法：基本原理與代碼實現》](https://www.tenlong.com.tw/products/9787115596154?list_name=r-zh_cn)
