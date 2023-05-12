export class Dictionary {
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

  hasKey(key) {
    return this.table[this.toString(key)] != null;
  }

  set(key, value) {
    if (key != null && value != null) {
      this.table[this.toString(key)] = new ValuePair(key, value);
      return true;
    }
    return false;
  }

  get(key) {
    const valuePair = this.table[this.toString(key)];
    return valuePair == null ? undefined : valuePair.value;
  }

  remove(key) {
    if (this.hasKey(key)) {
      delete this.table[this.toString(key)];
      return true;
    }
    return false;
  }

  keys() {
    return this.keyValues().map((valuePair) => valuePair.key);
  }

  values() {
    return this.keyValues().map((valuePair) => valuePair.value);
  }

  keyValues() {
    return Object.values(this.table);
  }

  size() {
    return Object.keys(this.table).length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    this.table = {};
  }

  /**
   * Executes the provided callback function for each key-value pair
   * present in this Dictionary.
   * @param {(key: any, value: any) => any} callback Function to execute
   * for each element, taking two arguments: key and value. The
   * callback can return false to terminate the loop early.
   * @example
   * dictionary.forEach((key, value) => {
   *  console.log(`Key: ${key}, Value: ${value}`);
   * });
   */
  forEach(callback) {
    const valuePairs = this.keyValues();
    for (let i = 0; i < valuePairs.length; i += 1) {
      const result = callback(valuePairs[i].key, valuePairs[i].value);
      if (result === false) {
        break;
      }
    }
  }
}

class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}
