export class HashTable {
  table = {};

  toString(item) {
    if (item === null) {
      return 'NULL';
    } else if (item === undefined) {
      return 'UNDEFINED';
    } else if (typeof item === 'string' || item instanceof String) {
      return item;
    }
    return JSON.stringify(item);
  }

  /**
   * Converts a key to hash code.
   * @param {PropertyKey} key
   * @returns {number}
   */
  // _hashCode(key) {
  //   if (typeof key === 'number') {
  //     return key;
  //   }
  //   const tableKey = this.toString(key);
  //   let hash = 0;
  //   for (let i = 0; i < tableKey.length; i++) {
  //     hash += tableKey.charCodeAt(i);
  //   }
  //   return hash % 37;
  // }
  _hashCode(key) {
    const tableKey = this.toString(key);
    let hash = 5381;
    for (let i = 0; i < tableKey.length; i++) {
      hash = hash * 33 + tableKey.charCodeAt(i);
    }
    return hash % 1013;
  }

  /**
   * Adds a new item to the hash table.
   * @param {PropertyKey} key
   * @param {*} value
   */
  set(key, value) {
    if (key != null && value != null) {
      const hash = this._hashCode(key);
      this.table[hash] = new ValuePair(key, value);
      return true;
    }
    return false;
  }

  get(key) {
    const valuePair = this.table[this._hashCode(key)];
    return valuePair == null ? undefined : valuePair.value;
  }

  remove(key) {
    const hash = this._hashCode(key);
    const valuePair = this.table[hash];
    if (valuePair != null) {
      delete this.table[hash];
      return true;
    }
    return false;
  }
}

class ValuePair {
  /**
   * @constructor
   * @property {PropertyKey} key
   * @property {*} value
   */
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}
