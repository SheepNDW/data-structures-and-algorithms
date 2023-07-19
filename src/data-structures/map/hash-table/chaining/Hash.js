class Node {
  constructor(name, data) {
    this.name = name;
    this.data = data;
    this.next = null;
  }
}

class Hash {
  constructor() {
    /** @type {Node[]} */
    this.table = [];
  }

  hash(key) {
    key += ''; // 強制轉成字串
    let HASHSIZE = 100;
    let h = 0;
    for (let i = 0; i < key.length; i++) {
      h = key.charCodeAt(i) + h * 31;
    }
    // 將整個字串按照特定關係轉化成一個整數，然後對雜湊長度取餘數
    return h % HASHSIZE;
  }

  loopup(key) {
    const hashvalue = this.hash(key);
    let node = this.table[hashvalue];
    while (node) {
      if (node.name == key + '') {
        return node;
      }
      node = node.next;
    }
  }

  get(key) {
    const node = this.loopup(key);
    return node ? node.data : null;
  }

  remove(key) {
    const node = this.loopup(key);
    if (node) {
      node.data = null;
    }
  }

  insert(key, data) {
    const hashvalue = this.hash(key);
    // 不管這個雜湊位置有沒有其他節點，直接插入節點
    let node = this.table[hashvalue];
    let next = node;
    if (node) {
      while (node) {
        if (node.name === key + '') {
          node.data = data;
          return; // key data 一致
        }
        node = node.next;
      }
    }
    let np = new Node(key, data);
    this.table[hashvalue] = np;
    np.next = next;
  }

  forEach(cb) {
    for (let i = 0; i < 100; i++) {
      if (this.table[i]) {
        let link = this.table[i];
        while (link) {
          if (link.data !== null) {
            cb(link.name, link.data);
          }
          link = link.next;
        }
      }
    }
  }
}

export { Hash };
