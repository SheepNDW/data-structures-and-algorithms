## 鏈結串列的排序

最後來看看如何對鏈結串列進行排序。在排序時我們無法使用任何存取 `link[index]` 的排序演算法，有如下的排序法符合需求：

### 1. 插入排序法（Insertion Sort）

把 linked list 分成已排序與未排序兩個部分，每次從未排序的區域取得第一個節點，在已排序的區域中找到適當的位置插入。實作程式碼如下：

```js
function insertSort(list) {
  let head = list.head;
  // 如果沒有或只有一個節點，直接 return
  if (!head || !head.next) {
    return;
  }

  let lastSorted = head; // 已排序的最後一個節點
  while (lastSorted.next) {
    // 如果還有下一個節點
    let firstUnsort = lastSorted.next; // 未排序的第一個節點
    if (lastSorted.element > firstUnsort.element) {
      // 已排序的最前一個
      let firstSorted = head;
      let prev = null;
      // 將 firstUnsort 拿出來
      lastSorted.next = firstUnsort.next;
      // 求出 firstUnsort 應該插入的位置，讓它在已排序的區域中逐一比較
      while (firstSorted.element < firstUnsort.element) {
        prev = firstSorted;
        firstSorted = firstSorted.next;
      }
      if (!prev) {
        // 如果 prev 為 null，代表 firstUnsort 應該插入在 head 之前
        firstUnsort.next = head;
        head = firstUnsort;
      } else {
        prev.next = firstUnsort;
        firstUnsort.next = firstSorted;
      }
    } else {
      // firstUnsort 剛好比 lastSorted 大
      lastSorted = lastSorted.next;
    }
  }
  // 修正首尾節點
  list.head = head;
  list.tail = lastSorted;
}

// 可以試著執行下面這段程式碼查看結果
const array = [2, 3, 8, 7, 4, 5, 9, 6, 1, 0];
const list = new DoublyList();
array.forEach((el, i) => list.insertAt(i, el));
list.forEach((el, i) => console.log(i, el));
insertSort(list);
console.log('----sorted----', list);
list.forEach((el, i) => console.log(i, el));
```

### 2. 氣泡排序法（Bubble Sort）

左右節點進行比較交換，並且記錄最後的節點，縮小比較範圍，實作程式碼如下：

```js
function bubbleSort(list) {
  let head = list.head;
  if (!head || !head.next) {
    // 如果沒有或只有一個節點，不用排序
    return;
  }
  let smallest = new DoublyNode(Number.MIN_VALUE);
  smallest.next = head;
  list.tail = null; // 準備重置 tail
  let len = 0;
  let h = smallest;
  while (h.next) {
    len++;
    h = h.next;
  }

  for (let i = 0; i < len; i++) { // 待改進1
    let hasSort = true;
    let h = smallest;
    let p1 = h.next;
    let p2 = p1.next;
    for (let j = 0; j < len && p2; j++) { // 待改進2
      if (p1.element > p2.element) {
        h.next = p2;
        p1.next = p2.next;
        p2.next = p1;
        hasSort = false;
      }
      h = h.next;
      p1 = h.next;
      p2 = p1.next;
    }
    // 第一次氣泡排序結束後，p1 的位置就是 tail（p2 已是 null）
    if (!list.tail) {
      list.tail = p1;
    }
    if (hasSort) {
      break;
    }
  }
  // 重置新的 head
  list.head = smallest.next;
}
```

回顧之前學到的 bubble sort 的最佳化方法，我們可以減少迴圈次數，例如在“待改進1”處，將 `i = 0` 改成 `i = 1`；在“待改進2”處，可以將 `j < len && p2` 改成 `j < len - 1`。還可以引入 swapPos 變數，減少內層迴圈次數，實作程式碼如下：

```js
function bubbleSort(list) {
  let k = len - 1;
  let swapPos = 0;
  for (let i = 1; i < len; i++) {
    let hasSort = true;
    let h = smallest;
    let p1 = h.next;
    let p2 = p1.next;
    for (let j = 0; j < k; j++) { // k 是可變的
      if (p1.element > p2.element) {
        h.next = p2;
        p1.next = p2.next;
        p2.next = p1;
        hasSort = false;
        swapPos = j;
      }
      h = h.next;
      p1 = h.next;
      p2 = p1.next;
    }
    k = swapPos;
  }
  // 重置新的 head
  list.head = smallest.next;
}
```

### 選擇排序法（Selection Sort）

與插入排序一樣，分成兩個區域，但它是每次從未排序的區域中找出最小的元素，並將其插入到已排序的區域的末尾，實作程式碼如下：

```js
function selectSort(list) {
  let head = list.head;
  if (!head || !head.next) {
    return;
  }
  let firstSorted, lastSorted, minPrev, min, p;
  while (head) {
    // 1. 在 linked list 中找到最小的節點
    for (p = head, min = head; p.next; p = p.next) {
      if (p.next.element < min.element) {
        minPrev = p;
        min = p.next;
      }
    }
    // 2. 建構有序 linked list
    if (!firstSorted) {
      firstSorted = min; // 如果目前還是空的，就設置為第一個節點
    } else {
      lastSorted.next = min; // 否則就把最小的節點接在上一個已排序節點的後面
    }
    // 3. 調整 lastSorted
    lastSorted = min;
    // 4. 將 min 從原本的 linked list 中移除
    if (min == head) {
      head = head.next;
    } else {
      minPrev.next = min.next; // 移除
    }
  }
  if (lastSorted) {
    lastSorted.next = null; // 清空最後節點的 next
  }
  list.head = firstSorted;
  list.tail = lastSorted;
}
```

### 快速排序法（Quick Sort）

快速排序的核心是 partition，我們選擇第一個節點當作 pivot，然後把小魚 pivot 的節點放到一個 linked list 中，大於等於 pivot 的節點放到另一個 linked list 中，最後再將兩個 linked list 串接起來，實作程式碼如下：

```js
function quickSort(list) {
  let head = list.head;
  if (!head || !head.next) {
    return;
  }
  let tempHead = new DoublyNode(0);
  tempHead.next = head;
  recursion(tempHead, head, null);
  let h = (list.head = tempHead.next);
  while (h) {
    list.tail = h;
    h = h.next;
  }
}

function recursion(prevHead, head, tail) {
  // linked list 的範圍是 [low, high]
  if (head != tail && head.next != tail) {
    const mid = partition(prevHead, head, tail); // 注意這裡的 head 可能不再指向 list 的 head
    recursion(prevHead, prevHead.next, mid);
    recursion(mid, mid.next, tail);
  }
}

function partition(prevLow, low, high) {
  let pivotKey = low.element; // low 為 pivot
  let little = new DoublyNode('');
  let bigger = new DoublyNode('');
  let littleHead = little; // 記錄原本的引用
  let biggerHead = bigger; // 記錄原本的引用

  for (let node = low.next; node != high; node = node.next) {
    if (node.element < pivotKey) {
      little.next = node;
      little = node;
    } else {
      bigger.next = node;
      bigger = node;
    }
  }
  // [prevLow littleHead ... low biggerHead ... big high]
  bigger.next = high;
  little.next = low;
  low.next = biggerHead.next; // 去掉 biggerHead
  prevLow.next = littleHead.next; // 去掉 littleHead
  return low;
}
```
