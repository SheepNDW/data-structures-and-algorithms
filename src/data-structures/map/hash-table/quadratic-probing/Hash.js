class Node {
  constructor(name, data) {
    this.name = name;
    this.data = data;
    this.next = null;
    this.state = true;
  }
}

class Hash {
  constructor() {
    /** @type {Node[]} */
    this.table = [];
    this.capacity = 100; // 容量
    this.length = 0;
  }

  hash(s) {
    let seed = 131;
    let hash = 0;
    for (let i = 0; i < s.length; i++) {
      hash = s.charCodeAt(i) + hash * seed;
    }
    return hash & 0x7fffffff;
  }

  getHash(key, capacity) {
    return this.hash(key + '') % capacity;
  }

  size() {
    return this.length;
  }

  insert(key, value) {
    let inserted = false;
    const index = this.find(key, (item) => {
      item.data = value;
      if (!item.state) {
        this.length++;
      }
      inserted = item.state = true;
    });
    if (!inserted) {
      this.table[index] = new Node(key, value);
      this.length++;
    }
    if ((this.length * 10) / this.capacity > 6) {
      this.capacity *= 2;
    }
    return true;
  }

  find(key, cb) {
    const table = this.table;
    let index = this.getHash(key, this.capacity);
    let i = 1;
    while (table[index]) {
      if (table[index].name === key + '') {
        cb.call(this, table[index]);
      }
      index = index + 2 * i - 1;
      index %= this.capacity;
      i++;
    }
    return index;
  }

  get(key) {
    let value = null;
    const index = this.find(key, (item) => {
      if (item.state) {
        value = item.data;
      }
    });
    return value;
  }

  remove(key) {
    let oldSize = this.length;
    this.find(key, (item) => {
      item.state = false;
      this.length--;
      if ((this.length * 10) / this.capacity < 6) {
        this.capacity /= 2;
      }
    });
    return this.length !== oldSize;
  }

  forEach(cb) {
    for (let i = 0; i < this.capacity; i++) {
      const el = this.table[i];
      if (el && el.state) {
        cb(el.name, el.data);
      }
    }
  }
}

export { Hash };
