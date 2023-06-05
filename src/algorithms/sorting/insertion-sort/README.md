# 插入排序法（Insertion Sort）

插入排序法（Insertion Sort），它類似選擇排序，也是將陣列分成兩個區域，左邊第 1 個數為有序區域，右邊所有數在無序區域。不同的是，插入排序每次跑迴圈時不是找最小的數，而是將無序區域的第 1 個數插入到有序區域的適當位置。這樣有序區域不斷增加，無序區域不斷減少，直到無序區域為空，排序完成。

它和我們在打撲克牌時，將手上的牌從小到大排列的方式非常相似，我們會將手上的牌分成兩堆，一堆是已經排好序的牌，另一堆是還沒排好序的牌。我們會從還沒排好序的牌中拿出一張牌，然後插入到已經排好序的牌中的適當位置。由於突出“插入”這個動作，因此稱為插入排序。

“插入”這個行為我們需要在有序區域找到要插入的位置，然後將比它大的數往後移動一格，挪出一個“坑位”，然後將無序區域的第 1 個元素放到坑位上。我們可以參考 wiki 的這張 gif：

![Insertion Sort](https://upload.wikimedia.org/wikipedia/commons/0/0f/Insertion-sort-example-300px.gif)

Insertion sort 實作起來有點複雜，需要寫兩個內部的迴圈：

```js
function insertSort(array) {
  let n = array.length;
  for (let i = 1; i < n; i++) { // #1 查找：在有序區域找到目標元素
    let target = array[i];
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (target > array[j]) {
        break;
      }
    }
    if (j !== i - 1) {
      // 將比 target 大的元素往後移動一位
      for (let k = i - 1; k > j; k--) { // #2 挪坑：挪到位置，留出坑位  
        array[k + 1] = array[k];
      }
      array[j + 1] = target;
    }
  }
}
```

這樣程式碼太長了，不夠清晰，我們可以把查找跟挪坑這兩步合併，即每次 `array[i]` 先和前一個元素 `array[i - 1]` 比較，如果 `array[i] >= array[i - 1]`，說明 `array[0...i]` 也是有序的，不需要再做任何事情；否則就令 `j = i - 1`，`target = array[i]`。然後一邊將 `array[i]` 向後移動，一邊向前搜尋，當有 `array[j] < array[i]` 時停止，並將 `target` 放到 `array[j + 1]` 的位置。

```js
function insertSort(array) {
  let n = array.length;
  for (let i = 1; i < n; i++) {
    let target = array[i];
    let j;
    // 合併兩個內部迴圈
    for (j = i - 1; j >= 0 && array[j] > target; j--) {
      array[j + 1] = array[j]; // 挪出空位
    }
    array[j + 1] = target; // 插入目標值
  }
}
```

接著再將 for 迴圈改成 while 迴圈：

```js
function inserSort2(array) {
  let n = array.length;
  for (let i = 1; i < n; i++) {
    let target = array[i];
    let j = i - 1;
    while (j > 0 && array[j - 1] > target) {
      array[j] = array[j - 1]; // 前面覆蓋後面
      j--;
    }
    array[j] = target; // 插入目標值
  }
}
```

## 複雜度（Complexity）

| Name               | Average  |  Best  |  Worst   | Space  |  Method  | Stable |
| ------------------ | :------: | :----: | :------: | :----: | :------: | :----: |
| **Insertion sort** | $O(n^2)$ | $O(n)$ | $O(n^2)$ | $O(1)$ | In-place |  Yes   |

Insertion sort 的時間複雜度也是 $O(n^2)$，但經過測試後發現，在大多數情況下，Insertion sort 的效率比 Bubble sort 和 Selection sort 還要高，這是因為它的平均複雜度為 $O(n^2/4)$，最好的情況能達到 $O(n)$。我們把 Insertion sort 也加入耗時測試一起比較，得出結果為：

```bash
========
部分有序的情況 bubbleSort3 6
完全亂序的情況 bubbleSort3 330
========
部分有序的情況 selectSort 46
完全亂序的情況 selectSort 44
========
部分有序的情況 insertionSort 1
完全亂序的情況 insertionSort 20
========
部分有序的情況 insertionSort2 1
完全亂序的情況 insertionSort2 19
```

## 參考資料

- [《JavaScript 算法：基本原理與代碼實現》](https://www.tenlong.com.tw/products/9787115596154?list_name=r-zh_cn)
