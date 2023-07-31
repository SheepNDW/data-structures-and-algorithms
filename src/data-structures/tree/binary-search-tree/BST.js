class TreeNode {
  constructor(data) {
    /** @type {TreeNode | null} */
    this.parent = null;
    this.data = data;
    /** @type {TreeNode | null} */
    this.left = null;
    /** @type {TreeNode | null} */
    this.right = null;
  }
}

// 沿用之前 class Tree 的方法，僅重寫 insert、find、remove 和 toString 方法，新增 printNodeByLevel 和 show 方法
export class BST {
  constructor() {
    /** @type {TreeNode | null} */
    this.root = null;
    this._size = 0;
  }

  insert(data) {
    const node = new TreeNode(data);
    if (this.root === null) {
      this.root = node;
      this._size++;
      return true;
    }

    let current = this.root;
    let parent = null;
    while (current) {
      parent = current;
      if (data === current.data) return false;
      node.parent = parent;
      if (data < current.data) {
        current = current.left;
        if (current === null) {
          parent.left = node;
          this._size++;
          return true;
        }
      } else {
        current = current.right;
        if (current === null) {
          parent.right = node;
          this._size++;
          return true;
        }
      }
    }
  }

  /** @returns {TreeNode | null} */
  find(data) {
    let node = this.root;
    while (node) {
      if (data === node.data) {
        return node;
      } else if (data < node.data) {
        node = node.left;
      } else {
        node = node.right;
      }
    }
    return null;
  }

  remove(data) {
    const node = this.find(data);
    if (node) {
      this.removeNode(node);
      this._size--;
    }
  }

  removeNode(node) {
    // 如果有兩個子節點
    if (node.left !== null && node.right !== null) {
      let succ = null;
      for (succ = node.right; succ.left !== null; succ = succ.left); // 找到後繼
      node.data = succ.data; // 用後繼的值替換當前節點的值
      this.removeNode(succ); // 遞迴刪除，只可能遞迴一次
    } else {
      // 葉節點或只有一個子節點
      let child = node.left || node.right || null;
      this.transplant(node, child);
    }
  }

  transplant(node, child) {
    if (node.parent == null) {
      this.root = child;
    } else if (node === node.parent.left) {
      node.parent.left = child;
    } else {
      node.parent.right = child;
    }
    if (child) {
      child.parent = node.parent;
    }
  }

  minNode(node) {
    let current = node || this.root;
    while (current.left) {
      current = current.left;
    }
    return current;
  }

  maxNode(node) {
    let current = node || this.root;
    while (current.right) {
      current = current.right;
    }
    return current;
  }

  min() {
    const node = this.minNode();
    return node ? node.data : null;
  }

  max() {
    const node = this.maxNode();
    return node ? node.data : null;
  }

  size() {
    return this._size; // this.getNodeSize(this.root);
  }

  getNodeSize(node) {
    if (node === null) {
      return 0;
    }
    const leftChildSize = this.getNodeSize(node.left);
    const rightChildSize = this.getNodeSize(node.right);
    return leftChildSize + rightChildSize + 1;
  }

  height() {
    return this.getNodeHeight(this.root);
  }

  getNodeHeight(node) {
    if (node === null) {
      return 0;
    }
    const leftChildHeight = this.getNodeHeight(node.left);
    const rightChildHeight = this.getNodeHeight(node.right);
    const max = Math.max(leftChildHeight, rightChildHeight);
    return max + 1;
  }

  inOrder(callback) {
    this._forEach(this.root, callback, 'middle');
  }

  preOrder(callback) {
    this._forEach(this.root, callback, 'pre');
  }

  postOrder(callback) {
    this._forEach(this.root, callback, 'post');
  }

  _forEach(node, callback, type) {
    if (node) {
      if (type === 'middle') {
        this._forEach(node.left, callback, type);
        callback(node);
        this._forEach(node.right, callback, type);
      } else if (type === 'pre') {
        callback(node);
        this._forEach(node.left, callback, type);
        this._forEach(node.right, callback, type);
      } else if (type === 'post') {
        this._forEach(node.left, callback, type);
        this._forEach(node.right, callback, type);
        callback(node);
      }
    }
  }

  toString() {}

  printNodeByLevel() {}
}

/**
 * find successor of node
 * @param {TreeNode} node
 * @returns {TreeNode | null}
 */
function predecessor(node) {
  let ret;
  if (node.left) {
    // 如果有左子樹
    ret = node.left;
    while (ret.right) {
      // 在左子樹中找到最右邊的節點
      ret = ret.right;
    }
    return ret;
  } else {
    let p = node.parent;
    while (p && p.left === node) {
      node = p; // 找到一個父節點，是其父節點的父節點的左子節點
      p = p.parent;
    }
    return p;
  }
}

/**
 * find successor of node
 * @param {TreeNode} node
 * @returns {TreeNode | null}
 */
function successor(node) {
  if (node.right) {
    // 如果有右子樹
    let ret = node.right;
    while (ret.left) {
      // 在右子樹中找到最左邊的節點
      ret = ret.left;
    }
    return ret;
  } else {
    let p = node.parent;
    while (p && p.right === node) {
      node = p; // 找到一個父節點，是其父節點的父節點的右節點
      p = p.parent;
    }
    return p;
  }
}
