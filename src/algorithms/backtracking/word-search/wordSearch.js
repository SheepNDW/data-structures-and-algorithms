/**
 * leetcode: 79. Word Search
 * @link https://leetcode.com/problems/word-search/
 * @param {string[][]} board
 * @param {string} word
 * @return {boolean}
 */
export function exist(board, word) {
  const row = board.length;
  const col = board[0].length;

  // 雙層迴圈，每個座標都嘗試一次
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      // 從第一格開始找(i, j)，找到目標的第一個字母時，開始往四個方向搜尋
      const isFound = find(i, j, 0);
      if (isFound) return true;
    }
  }

  // 結束後都沒找到，回傳 false
  return false;

  /**
   * 遞迴搜尋，第一個字母符合後就接著再遞迴 find 上下左右找下一個字母
   * @param {number} r - row
   * @param {number} c - col
   * @param {number} current - 目前要找的字母的 index (位置)
   * @return {boolean}
   */
  function find(r, c, current) {
    if (r >= row || r < 0 || c >= col || c < 0) return false;
    if (board[r][c] !== word[current]) return false; // 不符合，回傳 false

    // 執行到這說明 board[r][c] 符合目標字母:
    // 1. 如果 current 已經是最後一個字母，表示找到了，回傳 true
    if (current === word.length - 1) return true;

    const temp = board[r][c]; // 先把目前的字母存起來
    board[r][c] = null; // 把目前的字母改成 null，避免重複尋找

    // 2. 遞迴尋找上下左右
    // 例如：board[0][0] 是目標的第一個字母，接著 find 找 [0][1]、[1][0]
    // 沒找到回傳 false，結束所有 find，進入下一個迴圈
    const isFound =
      find(r - 1, c, current + 1) || // 上
      find(r + 1, c, current + 1) || // 下
      find(r, c - 1, current + 1) || // 左
      find(r, c + 1, current + 1); // 右

    // 3. 還原目前的字母
    board[r][c] = temp;

    return isFound;
  }
}
