## 桶排序法（Bucket Sort）

桶排序法（Bucket Sort）與計數排序法（Counting Sort）很像，不過現在的桶不單單只是為了計數，而是實實在在地放入元素。舉個例子，學校要對所有老師按照年齡進行排序，有很多老師很難操作，那麼可以先按照年齡區間進行分組，20~30 歲的一組，30~40 歲一組，50~60歲一組，然後再對每一組進行排序。這樣效率就會提高很多，Bucket Sort 也是基於這個思想。

Bucket Sort 的操作步驟如下：

1. 找出目前陣列中的最大值和最小值。
2. 確認需要多少個 bucket（通常作為參數傳入，不能大於陣列長度），然後最大值減去最小值除以 bucket 數量，得出每個 bucket 最多能放幾個元素，我們稱這個數為 bucket 的最大容量。
3. 遍歷原始陣列的所有元素，除以這個最大容量，就能得到它要放入的 bucket 編號。在放入時可以使用 insertion sort，也可以在合併時再使用 quick sort。
4. 對所有 bucket 進行遍歷，如果 bucket 內的元素已經排序好，就直接取出放入輸出結果的陣列即可。

將陣列 `array` 劃分為 `n` 個大小相同的子區間（bucket），每個子區間各自排序，最後合併。

<div style="background: white; width: 300px">

![](https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Bucket_sort_1.svg/300px-Bucket_sort_1.svg.png)

![](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Bucket_sort_2.svg/300px-Bucket_sort_2.svg.png)
</div>

具體實作的程式碼如下：

```js
function bucketSort(array, bucketSize = 3) {
  if (array <= 1) {
    return array;
  }
  const n = array.length;
  const min = Math.min(...array);
  const max = Math.max(...array);
  if (min === max) {
    return array;
  }
  const capacity = (max - min + 1) / bucketSize;
  const buckets = new Array(max - min + 1);
  for (let i = 0; i < n; i++) {
    const el = array[i];
    const bucketIndex = Math.floor((el - min) / capacity);
    const bucket = buckets[bucketIndex];
    if (bucket) {
      let jn = bucket.length;
      if (el >= bucket[jn - 1]) {
        bucket[jn] = el;
      } else {
        insertSort: for (let j = 0; j < jn; j++) {
          if (bucket[j] > el) {
            while (jn > j) { // 全部向後挪一位
              bucket[jn] = bucket[jn - 1];
              jn--;
            }
            bucket[j] = el; // 讓 el 佔據 bucket[j] 的位置
            break insertSort;
          }
        }
      }
    } else {
      buckets[bucketIndex] = [el];
    }
  }
  let index = 0;
  for (let i = 0; i < bucketSize; i++) {
    const bucket = buckets[i];
    for (let k = 0; k < bucket.length; k++) {
      array[index++] = bucket[k];
    }
  }
  return array;
}
```

## 複雜度（Complexity）

| Name            |  Average   |    Best    |  Worst   |   Space    |  Method   | Stable |
| --------------- | :--------: | :--------: | :------: | :--------: | :-------: | :----: |
| **Bucket sort** | $O(n + k)$ | $O(n + k)$ | $O(n^2)$ | $O(n + k)$ | Out-place |  Yes   |
> k 為桶（bucket）的個數

## 參考資料

- [《JavaScript 算法：基本原理與代碼實現》](https://www.tenlong.com.tw/products/9787115596154?list_name=r-zh_cn)
- [Bucket Sort on Wikipedia](https://en.wikipedia.org/wiki/Bucket_sort)
