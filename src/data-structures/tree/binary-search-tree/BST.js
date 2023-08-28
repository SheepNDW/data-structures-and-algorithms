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

  printNodeByLevel(callback) {
    const queue = [];
    let node = this.root;
    if (node) {
      queue.push(node);
      queue.push(0);
    }
    while (queue.length > 0) {
      node = queue.shift();
      if (node) {
        callback(node);
        if (node.left) {
          queue.push(node.left);
        }
        if (node.right) {
          queue.push(node.right);
        }
      } else if (queue.length > 0) {
        callback(node); // output 0
        queue.push(0);
      }
    }
    callback(0);
  }

  toString(displayData) {
    // 輔助方法，讓資料置中對齊
    const brickLen = 6;
    const SW = ' ';
    const LINE = '_';

    displayData =
      displayData ||
      function (node) {
        const { data, left, right } = node;
        let s = '(' + data + ')';
        const isLeaf = !left && !right;
        const fillChar = isLeaf ? SW : LINE;
        const paddingLength = brickLen - s.length;

        for (let i = 0; i < paddingLength; i++) {
          if (i % 2 === 0) {
            s = s.padEnd(s.length + 1, fillChar);
          } else {
            s = s.padStart(s.length + 1, fillChar);
          }
        }
        return s;
      };

    // 建立 4 個字元的空白或底線
    function createPadding(s, n = brickLen) {
      let ret = '';
      for (let i = 0; i < n; i++) {
        ret += s;
      }
      return ret;
    }

    // ==== 以下是主要的 toString 方法 ====
    // 新增索引值
    let index = 0;
    this.inOrder((node) => {
      node.index = index++;
    });
    // 取得每一層的節點
    const allLevels = [];
    let currLevel = [];
    this.printNodeByLevel((node) => {
      if (node === 0) {
        allLevels.push(currLevel);
        currLevel = [];
      } else {
        currLevel.push(node);
      }
    });

    // bricks 中有 data 的層級，branches 只是用來放斜線的層級，兩個都是二維陣列
    const bricks = [];
    const branches = [];
    for (let i = 0; i < allLevels.length; i++) {
      if (!bricks[i]) {
        bricks[i] = [];
        branches[i] = [];
      }

      let cbrick = bricks[i];
      let cbranch = branches[i];
      let level = allLevels[i];
      while (level.length > 0) {
        let el = level.shift();
        let j = el.index;
        // 確保 cbirck[j] 與 cbranch[j] 等長
        cbrick[j] = displayData(el);
        cbranch[j] = createPadding(SW, cbrick[j].length);

        if (el.parent) {
          let pbrick = bricks[i - 1];
          let pbranch = branches[i - 1];
          let pindex = el.parent.index;
          if (el === el.parent.left) {
            // 左子樹
            for (let k = j + 1; k < pindex; k++) {
              pbrick[k] = createPadding(LINE);
            }
            for (let k = j + 1; k < pindex; k++) {
              pbranch[k] = createPadding(SW);
            }
            pbranch[j] = createPadding(SW, brickLen - 1) + '/';
          } else {
            // 右子樹
            for (let k = pindex + 1; k < j; k++) {
              pbrick[k] = createPadding(LINE);
            }
            for (let k = pindex + 1; k < j; k++) {
              pbranch[k] = createPadding(SW);
            }
            pbranch[j] = '\\' + createPadding(SW, brickLen - 1);
          }
        }
        j--;
        inner: while (j > -1) {
          // 添加空白
          if (cbrick[j] == null) {
            cbrick[j] = createPadding(SW);
            cbranch[j] = createPadding(SW);
          } else {
            break inner;
          }
          j--;
        }
      }
    }
    return bricks
      .map((row, i) => {
        return row.join('') + '\n' + branches[i].join('');
      })
      .join('\n');
  }
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
