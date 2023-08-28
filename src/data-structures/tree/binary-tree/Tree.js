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

class Tree {
  constructor() {
    /** @type {TreeNode | null} */
    this.root = null;
    this._size = 0;
    this._insertLeft = false;
  }

  insert(data) {
    const dir = (this._insertLeft = !this._insertLeft); // 插入方向

    /** @param {TreeNode} node  @param {any} data  */
    function insertIt(node, data) {
      if (node.data === data) {
        return false;
      } else if (!node.left) {
        node.left = new TreeNode(data);
        node.left.parent = node;
        return true;
      } else if (!node.right) {
        node.right = new TreeNode(data);
        node.right.parent = node;
        return true;
      } else {
        if (dir === true) {
          return insertIt(node.left, data); // 遞迴
        }
        return insertIt(node.right, data); // 遞迴
      }
    }

    let ret = false;
    if (!this.root) {
      this.root = new TreeNode(data);
      ret = true;
    } else {
      ret = insertIt(this.root, data);
    }

    if (ret) {
      this._size++;
    }

    return ret;
  }

  /** @returns {TreeNode | null} */
  find(data) {
    let ret = null;

    /** @param {TreeNode} node @param {any} data */
    function findIt(node, data) {
      if (node) {
        if (node.data === data) {
          ret = node;
        } else {
          findIt(node.left, data);
          findIt(node.right, data);
        }
      }
    }

    findIt(this.root, data);
    return ret;
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
    return max + 1; // 加上自己本身
  }

  /**
   * ==== traversal recursive version ====
   */
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

  levelOrder(callback) {
    const queue = [];
    let node = this.root;
    node && queue.push(node);
    while (queue.length) {
      node = queue.shift();
      callback(node);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }

  /**
   * ==== stack version ====
   */
  // preOrder(callback) {
  //   // 口訣：中左右
  //   const stack = [];
  //   let node = this.root;
  //   while (node || stack.length) {
  //     if (node) {
  //       callback(node); // 中先於左
  //       stack.push(node);
  //       node = node.left; // push left
  //     } else {
  //       node = stack.pop();
  //       node = node.right; // push right
  //     }
  //   }
  // }

  // inOrder(callback) {
  //   // 口訣：左中右
  //   const stack = [];
  //   let node = this.root;
  //   while (node || stack.length) {
  //     if (node) {
  //       stack.push(node);
  //       node = node.left; // push left
  //     } else {
  //       node = stack.pop();
  //       callback(node); // 中先於右
  //       node = node.right; // push right
  //     }
  //   }
  // }

  // postOrder(callback) {
  //   // 口訣：左右中
  //   const stack = [];
  //   const out = [];
  //   let node = this.root;
  //   while (node || stack.length) {
  //     if (node) {
  //       // 類似於 preOrder
  //       stack.push(node);
  //       out.push(node);
  //       node = node.right;
  //     } else {
  //       node = stack.pop();
  //       node = node.left;
  //     }
  //   }
  //   while (out.length) {
  //     callback(out.pop());
  //   }
  // }

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
    // displayData =
    //   displayData ||
    //   function (node) {
    //     let s = '(' + node.data + ')';
    //     let right = true;
    //     let isLeaf = !node.left && !node.right;

    //     for (let i = s.length; i < brickLen; i++) {
    //       if (right) {
    //         s = s + (isLeaf ? SW : LINE);
    //       } else {
    //         s = (isLeaf ? SW : LINE) + s;
    //       }
    //       right = !right;
    //     }
    //     return s;
    //   };

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

function levelOrder(root) {
  const queue = [];
  root && queue.push(root, 0);
  const result = [];

  while (queue.length) {
    const el = queue.shift();
    const level = queue.shift();
    if (result[level]) {
      result[level].push(el.data);
    } else {
      result[level] = [el.data];
    }

    el.left && queue.push(el.left, level + 1);
    el.right && queue.push(el.right, level + 1);
  }

  return result;
}

export { Tree };
