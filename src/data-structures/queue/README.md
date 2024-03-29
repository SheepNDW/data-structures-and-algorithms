# 佇列 Queue

佇列（Queue）是一種先進先出（First In First Out）的資料結構，就像排隊買票一樣，先到的人先買票，後到的人後買票。

和 stack 一樣，queue 也是一種操作受限制的線性結構，但是它只允許在前端（front）進行刪除操作，而在後端（rear）進行插入操作。

具體可以參考下圖：

<div align="center">
  <img src="./images/queue.png" alt="queue" width="600px">
</div>

## Queue 的常用方法

- size：回傳佇列的長度
- isEmpty：判斷佇列是否為空
- enqueue/add：在佇列的後端插入元素
- dequeue/remove：刪除佇列的前端元素
- peek：存取第一個元素

實作程式碼如下：

```js
class Queue {
  #data = [];

  enqueue(el) {
    this.#data.push(el);
  }

  dequeue() {
    return this.#data.shift();
  }

  size() {
    return this.#data.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  peek() {
    return this.#data[0];
  }
}
```

不過用陣列實作 queue 有個缺點，就是用 `shift` 刪除元素時，陣列會將後面的元素往前移動，這樣會有一些效能上的問題，我們也可以使用物件來實作：

```js
class Queue {
  #items = {};
  #headCount = 0; // 記錄佇列的前端位置
  #count = 0; // 記錄新元素的位置

  enqueue(data) {
    this.#items[this.#count] = data;
    this.#count++;
  }

  dequeue() {
    if (this.isEmpty()) return;
    const head = this.#items[this.#headCount]; // 記錄將要刪除的元素
    delete this.#items[this.#headCount]; // 刪除前端的元素
    this.#headCount++; // 前端位置往後移動
    return head; // 回傳被刪除的元素
  }

  peek() {
    return this.#items[this.#headCount];
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.#count - this.#headCount;
  }

  clear() {
    this.#items = {};
    this.#headCount = 0;
    this.#count = 0;
  }

  toString() {
    let str = '';

    for (let i = this.#headCount; i < this.#count; i++) {
      str += this.#items[i] + (i < this.#count - 1 ? ',' : '');
    }

    return str;
  }
}
```

## Queue 的應用

#### Hot Potato Game

燙手山芋遊戲（擊鼓傳花），遊戲規則如下：

- 玩家們坐成一圈，主持人開始放音樂，然後手上有山芋的人開始把它傳給旁邊的人，直到音樂停止。
- 音樂停止時手上拿著山芋的人就會被淘汰，並且山芋會從他手上拿走，交給下一個人
- 重複上面的步驟，直到只剩下一個人就是贏家

這個遊戲情境可以想像成是一個 queue，每個人都是 queue 裡的一個元素，當音樂響起時，就把山芋傳給下一個人，相當於 `dequeue`，然後把這個暫時安全的這個人再 `enqueue` 回去，直到音樂停止，這個時候就直接 `dequeue` 這個人，並且淘汰他。

這時候就可以利用 queue 來找出如果主持人固定每一次都播 `num` 秒音樂且假設山芋都會傳給下一個人，該場遊戲的贏家是誰。實作程式碼如下：

```js
function passGame(participants, num) {
  const queue = new Queue();
  participants.forEach((item) => queue.enqueue(item));

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    console.log(`${queue.dequeue()} 被淘汰了`);
  }

  return queue.dequeue();
}
```

#### 回顧 JS 裡的 event loop

現在讓我們回顧一下以前在學 event loop 的時候，有一個叫做 task queue 的東西，這個 task queue 就是一個 queue，它會把所有的 callback function 都放進去，然後等到 call stack 裡的程式都執行完後，再把 task queue 裡的 callback function 按照放入的順序一個一個拿出來執行。這個就是一個 queue 的應用。

<div align="center">
  <img src="./images/event-loop.png" alt="event-loop" width="600px">
</div>

## 參考資料

- [《JavaScript 算法：基本原理與代碼實現》](https://www.tenlong.com.tw/products/9787115596154?list_name=r-zh_cn)
