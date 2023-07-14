# Bit Map

bitmap 其實就是一串二進位數字，顯然二進位是 99% 前端人的盲區，因為二進位涉及到的運算都是位元運算，而位元運算在前端的應用場景其實不多，所以這是大多數前端人的盲區。因此我們需要對位元操作進行再封裝。

## 簡述

首先回憶一下 counting sort，它用了一個龐大的陣列來裝載資料，並假裝將資料放入與它值相同的位置上。假設資料量非常龐大，達到數十億，此時記憶體還能負荷嗎？為了解決這個問題，科學家想到了用二進位數值來代替陣列，如果這個位數上有與其值相等的元素，就將這個位數設為 1，否則設為 0。

陣列 [1,2,5,4,7] 可以用 bitmap 表示為 10110110，因為陣列中最大的值是 7，所以要建立一個長度為 8 的二進位，讓其對應位置變成 1，這樣記憶體的使用量就大大降低了。

再來看看 JavaScript 如何表示二進位數值。0b11100 就是一個二進位數值，表示 28，要求前面兩位是 0b，後面是二進位數值。在建立時，我們可以先建立一個字串，再不斷往前加數字，然後在前面加上 0b，最後進入 Number 的建構子，即 `Number('ob11100')`。

我們再看如何操作位元數，例如，我們要將某一位變成 1 或 0，此時雖然可以使用 `split` 方法將其轉為陣列，再對其改動，最後再用 `join` 方法轉回字串。但這在演算法題目中是不被允許的，演算法尊重的是簡潔性與普遍性，而不是各種語言的特殊性。如果沒學過位元運算也沒關係，資料結構就是將這些底層的東西封裝一下，讓我們可以直接使用，下面是將某一位元變成 1 與 0 的兩個方法：

```js
/**
 * 將 num 的第 digit 位元設為 1
 * @param {number} num
 * @param {number} digit
 */
function change1(num, digit) {
  // digit 位數是從個位數開始算起，個位數是 0，十位數是 1，百位數是 2，以此類推
  const old = num;
  const mask = 1 << digit;
  num = num | mask;
  console.log(old.toString(2), `改變第${digit}位元為 1:`, num.toString(2));
  return num;
}

/**
 * 將 num 的第 digit 位元設為 0
 * @param {number} num
 * @param {number} digit
 */
function change0(num, digit) {
  const old = num;
  const mask = 1 << digit;
  num = num & ~mask;
  console.log(old.toString(2), `改變第${digit}位元為 0:`, num.toString(2));
  return num;
}
```

最後我們來看如何遍歷位元數，得知某一位元是 0 還是 1，通過判定這個可以將它轉換為字串，然後通過 `charAt` 來對其操作，但是這樣有點慢。

要取得二進位數中某一個位元的值可以這樣實作：

```js
/**
 * 取得 num 的第 digit 位元
 * @param {number} num
 * @param {number} digit
 */
function getBit(num, digit) {
  const result = (num >> digit) & 1;
  console.log(num.toString(2), `取得第${digit}位元:`, result);
  return result;
}
```

在知道如何建立二進位數以及以上三種方法後，我們就可以開始實作 bitmap 了。

實作程式碼如下：

```js
class BitMap {
  constructor(array) { // 傳入一個非負整數陣列
    let num = (this.binary = 0);
    for (let i = 0; i < array.length; i++) {
      num = this.change1(num, array[i]);
    }
    this.binary = num;
  }

  change1(num, digit) {
    const mask = 1 << digit;
    return num | mask;
  }

  change0(num, digit) {
    const mask = 1 << digit;
    return num & ~mask;
  }
  /**
   * 取得 num 的第 digit 位元的值，也可以判定 digit 在不在原始陣列中
   */
  get(digit) {
    return (this.binary >> digit) & 1;
  }
  /**
   * 回傳一個排好序的整數陣列
   */
  toArray() {
    const num = this.binary;
    const n = num.toString(2).length;
    const result = [];
    for (let i = 0; i < n; i++) {
      if ((num >> i) & 1) {
        result.push(i);
      }
    }
    return result;
  }
}
```

理論上這樣寫是對的，但這不適合 JavaScript，JavaScript 能夠表示的整數範圍是 -2^53 ~ 2^53，也就是正負數的絕對值都不能大於 9007199254740992。這個數是 16 位的，超過 16 位的整數 JavaScript 就不能精確表示了。

既然不能用一個超長的二進位數來表示陣列，那麼我們可以用一個長度為 16 的數字陣列來表示原本的資料，修改後的程式碼如下：

```js
class BitMap {
  constructor(array) {
    const boxes = (this.bits = []);
    for (let i = 0; i < array.length; i++) {
      const el = array[i];
      const box = Math.floor(el / 16);
      const index = el % 16;
      let bit = boxes[box] || 0; // 分析裝到哪個 box

      // 把對應的位元設為 1
      boxes[box] = this.change1(bit, index);
    }
  }

  change1(num, digit) {
    const mask = 1 << digit;
    return num | mask;
  }

  change0(num, digit) {
    const mask = 1 << digit;
    return num & ~mask;
  }
  /**
   * 取得 num 的第 digit 位元的值，也可以判定 digit 在不在原始陣列中
   */
  get(digit) {
    const box = Math.floor(digit / 16);
    const index = digit % 16;
    const bit = this.bits[box];
    return bit == 0 ? 0 : (bit >> index) & 1;
  }
  /**
   * 回傳一個排好序的整數陣列
   */
  toArray() {
    const boxes = this.bits;
    const result = [];
    for (let i = 0; i < boxes.length; i++) {
      const bit = boxes[i];
      if (bit != 0) {
        for (let j = 0; j < 16; j++) {
          if ((bit >> j) & 1) {
            result.push(i * 16 + j);
          }
        }
      }
    }
    return result;
  }
}
```

## 應用

Bitmap 適合用於大量資料且不重複的數字陣列的搜尋與排序。下面讓我們來看一些題目。

#### 1. 尋找遺失的數字

有一組數字，從 1 ~ n (此例假設 n = 10)，無序且不重複。例如：[8,9,2,3,6,1,4,5,7,10] 從中任意刪除 3 個數字，順序也再次被打亂，將這些剩餘的數字放在一個長度為 n - 3 的陣列中，請找出被刪除的數字。

```js
function missingNumber1(nums, a, b) {
  const bitmap = new BitMap(nums);
  const lost = [];

  for (let i = a; i < b; i++) { // 總共十個
    if (bitmap.get(i) === 0) {
      lost.push(i);
    }
  }

  return lost;
}

// 或是這樣寫

function missingNumber2(nums, a, b) {
  const str = [];
  nums.forEach((num) => {
    str[num] = 1;
  });

  const lost = [];
  for (let i = a; i < b; i++) {
    if (str[i] == null) {
      lost.push(i);
    }
  }

  return lost;
}
```

如果只有遺失一個數字，可以直接用數學方法解決，把 1 ~ n 的總和減去陣列中所有數字的總和，就是遺失的數字。

```js
function missingNumber(nums) {
  if (nums.length === 0) return 0;
  const sum = nums.reduce((acc, cur) => acc + cur);
  const n = nums.length + 1;
  return (n * (n + 1)) / 2 - sum;
}
```

#### 2. 判斷數字是否存在

給出 40 億個不重複的 unsigned int 的整數，沒有排序，然後再給出一個數字，判斷這個數字是否存在。

這個其實也很簡單，呼叫一下 `get` 方法就可以了：

```js
const bitmap = new BitMap(igNumbers);
console.log(!!bitmap.get(num));
```

## 參考資料

- [位元運算](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators)
- [《JavaScript 算法：基本原理與代碼實現》](https://www.tenlong.com.tw/products/9787115596154?list_name=r-zh_cn)
