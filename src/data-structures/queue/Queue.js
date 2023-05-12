// ==== Array implementation of a queue ====
// export class Queue {
//   #items = [];

//   enqueue(item) {
//     this.#items.push(item);
//   }

//   dequeue() {
//     return this.#items.shift();
//   }

//   front() {
//     return this.#items[0];
//   }

//   isEmpty() {
//     return this.#items.length === 0;
//   }

//   size() {
//     return this.#items.length;
//   }

//   clear() {
//     this.#items.length = 0;
//   }

//   toString() {
//     return this.#items.toString();
//   }
// }

// ==== Object implementation of a queue ====
export class Queue {
  #items = {};
  #headCount = 0;
  #count = 0;

  enqueue(data) {
    this.#items[this.#count] = data;
    this.#count++;
  }

  dequeue() {
    if (this.isEmpty()) return;
    const head = this.#items[this.#headCount];
    delete this.#items[this.#headCount];
    this.#headCount++;
    return head;
  }

  front() {
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
