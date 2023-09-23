class UnionFind {
  constructor(size) {
    this.size = size; // 表示目前還有多少個小組
    this.parents = new Array(size);
    this.weights = new Array(size);
    for (let i = 0; i < size; i++) {
      this.parents[i] = i;
      this.weights[i] = 1; // 每個集合只有一個元素
    }
  }

  // 查看元素屬於哪個集合
  query(element) {
    const p = this.parents;
    while (element !== p[element]) {
      p[element] = p[p[element]];
      element = p[element];
    }
    return element;
  }

  // 合併 a, b 兩個元素所在的集合
  merge(a, b) {
    const aParent = this.query(a);
    const bParent = this.query(b);

    if (aParent !== bParent) {
      this.size--;
      if (this.weights[aParent] > this.weights[bParent]) {
        this.parents[bParent] = aParent;
        this.weights[aParent] += this.weights[bParent];
      } else {
        this.parents[aParent] = bParent;
        this.weights[bParent] += this.weights[aParent];
      }
    }
  }

  // 查看元素 a, b 是否屬於同一個集合，如果不在同一個集合，則合併（連接）
  isConnected(a, b) {
    return this.query(a) === this.query(b);
  }

  toString() {
    return this.parents.join(' ');
  }
}

export { UnionFind };
