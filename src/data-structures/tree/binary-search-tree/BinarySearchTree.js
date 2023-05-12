const Compare = {
  lessThan: -1,
  biggerThan: 1,
  equal: 0,
};

/** Binary Search Tree Node */
class Node {
  /**
   * @param {unknown} key - node value
   */
  constructor(key) {
    this.key = key;
    /** @type {Node} - left child */
    this.left = null;
    /** @type {Node} - right child */
    this.right = null;
  }
}

export class BinarySearchTree {
  constructor() {
    /** @type {Node} root node */
    this.root = null;
  }
  /**
   * @param {unknown} key - node value
   */
  insert(key) {
    if (this.root === null) {
      this.root = new Node(key);
    } else {
      this.#insertNode(this.root, key);
    }
  }

  #compare(a, b) {
    if (a === b) {
      return Compare.equal;
    }
    return a < b ? Compare.lessThan : Compare.biggerThan;
  }
  /**
   * @param {Node} node - node to insert
   * @param {unknown} key - node value
   */
  #insertNode(node, key) {
    if (this.#compare(key, node.key) === Compare.lessThan) {
      if (node.left === null) {
        node.left = new Node(key);
      } else {
        this.#insertNode(node.left, key);
      }
    } else {
      if (node.right === null) {
        node.right = new Node(key);
      } else {
        this.#insertNode(node.right, key);
      }
    }
  }
  /**
   * Inorder traversal (中序遍歷)
   * @param {(value: unknown) => any} callback - callback function
   */
  inOrderTraverse(callback) {
    this.#inOrderTraverseNode(this.root, callback);
  }
  /**
   * @param {Node} node - node to traverse
   * @param {(value: unknown) => any} callback - callback function
   */
  #inOrderTraverseNode(node, callback) {
    if (node != null) {
      this.#inOrderTraverseNode(node.left, callback);
      callback(node.key);
      this.#inOrderTraverseNode(node.right, callback);
    }
  }

  /**
   * Preorder traversal (前序遍歷)
   * @param {(value: unknown) => any} callback - callback function
   */
  preOrderTraverse(callback) {
    this.#preOrderTraverseNode(this.root, callback);
  }
  /**
   * @param {Node} node - node to traverse
   * @param {(value: unknown) => any} callback - callback function
   */
  #preOrderTraverseNode(node, callback) {
    if (node != null) {
      callback(node.key);
      this.#preOrderTraverseNode(node.left, callback);
      this.#preOrderTraverseNode(node.right, callback);
    }
  }

  /**
   * Postorder traversal (後序遍歷)
   * @param {(value: unknown) => any} callback - callback function
   */
  postOrderTraverse(callback) {
    this.#postOrderTraverseNode(this.root, callback);
  }
  /**
   * @param {Node} node - node to traverse
   * @param {(value: unknown) => any} callback - callback function
   */
  #postOrderTraverseNode(node, callback) {
    if (node != null) {
      this.#postOrderTraverseNode(node.left, callback);
      this.#postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  }

  /**
   * Find the minimum node
   * @returns {Node}
   */
  min() {
    return this.#minNode(this.root);
  }
  #minNode(node) {
    let current = node;
    while (current != null && current.left != null) {
      current = current.left;
    }
    return current;
  }
  /**
   * Find the maximum node
   * @returns {Node}
   */
  max() {
    return this.#maxNode(this.root);
  }
  #maxNode(node) {
    let current = node;
    while (current != null && current.right != null) {
      current = current.right;
    }
    return current;
  }

  /**
   * Search the node with the key in the tree and return true if it exists
   * @param {unknown} key - node value
   * @returns {boolean}
   */
  search(key) {
    return this.#searchNode(this.root, key);
  }
  #searchNode(node, key) {
    if (node === null) {
      return false;
    }
    if (this.#compare(key, node.key) === Compare.lessThan) {
      return this.#searchNode(node.left, key);
    } else if (this.#compare(key, node.key) === Compare.biggerThan) {
      return this.#searchNode(node.right, key);
    } else {
      return true;
    }
  }

  remove(key) {
    this.root = this.#removeNode(this.root, key);
  }
  /**
   * @param {Node} node
   * @param {unknown} key
   */
  #removeNode(node, key) {
    if (node === null) {
      return null;
    }
    if (this.#compare(key, node.key) === Compare.lessThan) {
      node.left = this.#removeNode(node.left, key);
      return node;
    } else if (this.#compare(key, node.key) === Compare.biggerThan) {
      node.right = this.#removeNode(node.right, key);
      return node;
    } else {
      if (node.left == null && node.right == null) {
        node = null;
        return node;
      }

      if (node.left == null) {
        node = node.right;
        return node;
      } else if (node.right == null) {
        node = node.left;
        return node;
      }

      // node has two children
      const target = this.#minNode(node.right);
      node.key = target.key;
      node.right = this.#removeNode(node.right, target.key);

      return node;
    }
  }
}
