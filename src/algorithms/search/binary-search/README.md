# 二分搜尋 Binary Search

循序搜尋適合用在**未排序**的資料中，但是如果資料已經排序過了，我們就可以使用更快速的搜尋演算法來加速整個搜尋過程，讓複雜度降低到 O(log n)。而我今天要介紹的是二分搜尋法（Binary Search）。

Binary Search 是一種在**已排序**的資料中尋找目標值的搜尋演算法。它的原理和猜數字遊戲很像，例如在 1 ~ 100 範圍內猜一個數字，然後出題者會根據你猜的數字給你一個提示，例如「太大了」、「太小了」或是「猜對了」，然後我們根據提示來縮小範圍，直到猜對為止。

## Binary Search 的步驟

1. 先找到陣列的中間值。
2. 將中間值和目標值做比較，如果中間值等於目標值，那麼搜尋結束。
3. 如果目標值比中間值小，則回到步驟 1 並在中間值的左邊子陣列中尋找。
4. 如果目標值比中間值大，則回到步驟 1 並在中間值的右邊子陣列中尋找。

## 實作

在開始之前我們要先確認一件事，就是我們的陣列必須是已經排序過的，如果沒有排序過，我們就必須先對陣列做排序，確認已經排序過之後，我們就可以開始利用 binary search 來尋找目標值了。

```js
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}
```

整個搜尋過程如下圖所示：

<div align="center">
  <img src="./images/binary-search.png" alt="Binary Search" width="600"/>
</div>

## 練習

我們來看幾道關於 binary search 的題目：

首先是 [704. Binary Search](https://leetcode.com/problems/binary-search/)，這題其實就是要你實作 binary search，我們直接拿剛才的程式碼套進去就可以了，可以試著自己再實作一次看看。

### Search Insert Position

接下來我們來看 [35. Search Insert Position](https://leetcode.com/problems/search-insert-position/)，題目如下：

給你一個已經排序過的陣列 `nums` 和一個目標值 `target`，如果目標值存在於陣列中，則回傳目標值的索引，如果目標值不存在於陣列中，則回傳目標值應該被插入的位置索引。另外要求你必須在 O(log n) 的時間複雜度內完成。

例如：

`target` 存在於陣列中：

```txt
Input: nums = [1,3,5,6], target = 5
Output: 2
```

`target` 不存在於陣列中：

```txt
Input: nums = [1,3,5,6], target = 2
Output: 1
```

思路：其實也是一個基本的 binary search，只是當 `target` 不存在於陣列中時，我們要回傳的是 `left` 的值，因為 `left` 的值就是 `target` 應該被插入的位置索引。實作如下：

```js
function searchInsert(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (target === nums[mid]) {
      return mid;
    }

    if (target < nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
}
```

### Find Peak Element

最後我們來看 [162. Find Peak Element](https://leetcode.com/problems/find-peak-element/)，題目如下：

給你一個陣列 `nums`，你需要找出一個 peak element，peak element 的定義是：陣列中的一個元素，大於左右相鄰的元素。你可以假設 `nums[-1] = nums[n] = -∞`，也就是說陣列的邊界元素是負無窮，此外陣列中可能存在複數個 peak element。現在要請你寫一個時間複雜度為 O(log n) 的演算法來解決這個問題。

例如：

```txt
Input: nums = [1,2,3,1]
Output: 2
Explanation: 3 是一個 peak element，因為 3 大於左右相鄰的元素 2 和 1。
```

```txt
Input: nums = [1,2,1,3,5,6,4]
Output: 1 or 5
Explanation: 這個陣列有兩個 peak element，1 和 5，你可以回傳任何一個。
```

思路：直覺反應一定是直接迴圈把每一個都掃過一次檢查看是不是 peak，但是這樣的複雜度是 O(n)，題目要求我們必須在 O(log n) 的時間複雜度內完成，所以我們要使用 binary search 來解決這個問題。這題和前面的 binary search 稍微不同的地方在於，我們要找的不是一個特定的值，而是一個條件，也就是 peak element，我們可以從中點元素和它的右邊鄰居的大小關係來縮小搜尋範圍：

- 如果 `nums[mid] < nums[mid + 1]`，那麼在 `mid` 的右邊一定存在一個 peak element。
- 如果 `nums[mid] > nums[mid + 1]`，那麼在 `mid` 的左邊一定存在一個 peak element。

實作程式碼如下：

```js
function findPeakElement(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((right + left) / 2);

    if (nums[mid] > nums[mid + 1]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}
```
