/**
 * 473. Matchsticks to Square
 * @param {number[]} matchsticks
 * @return {boolean}
 */
function makesquare(matchsticks) {
  if (matchsticks.length < 4) {
    // 如果火柴棒數量小於 4，則無法構成正方形
    return false;
  }

  const sides = [[], [], [], []]; // sides 是用來觀察每個邊的火柴棒的，可以不要有
  const total = matchsticks.reduce((acc, curr) => acc + curr, 0);

  if (total % 4) {
    // 不能被 4 整除
    return false;
  }

  matchsticks.sort((a, b) => b - a); // 由大到小排序
  const maxSideLength = total / 4;
  const currSide = [0, 0, 0, 0];
  const end = matchsticks.length;

  function backtrack(start) {
    if (start >= end) {
      return (
        currSide[0] === maxSideLength &&
        currSide[1] === maxSideLength &&
        currSide[2] === maxSideLength &&
        currSide[3] === maxSideLength
      );
    } else {
      for (let i = 0; i < 4; i++) {
        if (currSide[i] + matchsticks[start] > maxSideLength) {
          continue;
        }

        sides[i].push(matchsticks[start]); // 這個可以不要
        currSide[i] += matchsticks[start];

        if (backtrack(start + 1)) {
          return true;
        }

        sides[i].pop(); // 這個可以不要
        currSide[i] -= matchsticks[start];
      }
    }
    return false;
  }

  const result = backtrack(0);
  // console.log(JSON.stringify(sides), result);
  return result;
}

export { makesquare };
