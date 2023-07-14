/**
 * 將 num 的第 digit 位元設為 1
 * @param {number} num
 * @param {number} digit
 */
function change1(num, digit) {
  // digit 位數是從個位數開始算起，個位數是 0，十位數是 1，百位數是 2，以此類推
  const old = num;
  const mask = 1 << digit;
  num = num | mask;
  // console.log(old.toString(2), `改變第${digit}位元為 1:`, num.toString(2));
  return num;
}

/**
 * 將 num 的第 digit 位元設為 0
 * @param {number} num
 * @param {number} digit
 */
function change0(num, digit) {
  const old = num;
  const mask = 1 << digit;
  num = num & ~mask;
  // console.log(old.toString(2), `改變第${digit}位元為 0:`, num.toString(2));
  return num;
}

/**
 * 取得 num 的第 digit 位元
 * @param {number} num
 * @param {number} digit
 */
function getBit(num, digit) {
  const result = (num >> digit) & 1;
  // console.log(num.toString(2), `取得第${digit}位元:`, result);
  return result;
}

class BitMap {
  constructor(array) {
    const boxes = (this.bits = []);
    for (let i = 0; i < array.length; i++) {
      const el = array[i];
      const box = Math.floor(el / 16);
      const index = el % 16;
      let bit = boxes[box] || 0; // 分析裝到哪個 box

      // 把對應的位元設為 1
      boxes[box] = this.change1(bit, index);
    }
  }
  /**
   * 將 num 的第 digit 位元設為 1
   * @param {number} num
   * @param {number} digit
   */
  change1(num, digit) {
    const mask = 1 << digit;
    return num | mask;
  }
  /**
   * 將 num 的第 digit 位元設為 0
   * @param {number} num
   * @param {number} digit
   */
  change0(num, digit) {
    const mask = 1 << digit;
    return num & ~mask;
  }
  /**
   * 取得 num 的第 digit 位元的值，也可以判定 digit 在不在原始陣列中
   * @param {number} digit
   */
  get(digit) {
    const box = Math.floor(digit / 16);
    const index = digit % 16;
    const bit = this.bits[box];
    return bit === 0 ? 0 : (bit >> index) & 1;
  }
  /**
   * 回傳一個排好序的整數陣列
   * @returns {number[]}
   */
  toArray() {
    const boxes = this.bits;
    const result = [];
    for (let i = 0; i < boxes.length; i++) {
      const bit = boxes[i];
      if (bit != 0) {
        for (let j = 0; j < 16; j++) {
          if ((bit >> j) & 1) {
            result.push(i * 16 + j);
          }
        }
      }
    }
    return result;
  }
}

export { change1, change0, getBit, BitMap };
