function findQueen() {
  const result = [];
  const path = [];
  const columns = {};
  const mainDiagonal = {};
  const backDiagonal = {};

  function isSafe(row, col) {
    return !columns[col] && !mainDiagonal[-(row - col)] && !backDiagonal[row + col];
  }

  function backtrack(row) {
    if (row === 8) {
      result.push([...path]);
    } else {
      for (let col = 0; col < 8; col++) {
        if (isSafe(row, col)) {
          // 目前位置可以放置
          path[row] = col; // 紀錄放置的位置
          columns[col] = true; // 目前皇后所在位置
          mainDiagonal[-(row - col)] = true; // 主對角線在第一列的行號
          backDiagonal[row + col] = true; // 反對角線在第一列的行號
          backtrack(row + 1);
          // 回溯
          path[row] = undefined;
          columns[col] = false;
          mainDiagonal[-(row - col)] = false;
          backDiagonal[row + col] = false;
        }
      }
    }
  }

  backtrack(0);
  return result.length;
}

export { findQueen };
