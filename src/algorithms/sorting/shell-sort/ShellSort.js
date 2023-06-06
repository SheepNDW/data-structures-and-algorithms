/**
 * Shell sort algorithm
 * @param {number[]} array
 */
function shellSort(array) {
  // 產生 gap sequence 3x+1 [1, 4, 13, 40, 121, 364,...]
  const n = array.length;
  const gaps = [1];
  let gap = 1;
  while (true) {
    gap = 3 * gap + 1;
    if (gap > n) break; // gap 不能大於 array 長度
    gaps.push(gap);
  }

  while ((gap = gaps.pop())) {
    // 對每個子陣列進行 insertion sort
    for (let g = 0; g < gap; g++) {
      for (let i = g + gap; i < n; i += gap) {
        let target = array[i]; // 從無序區取元素
        if (target < array[i - gap]) {
          // 無序區比有序區小
          let j = i;
          while (j > 0 && array[j - gap] > target) {
            // 有序區元素往後移
            array[j] = array[j - gap];
            j -= gap; // 不是 -1 而是 -gap
          }
          array[j] = target; // 插入元素
        }
      }
    }
  }
}

/**
 * Shell sort algorithm (shell sequence)
 * @param {number[]} array
 */
function shellSort2(array) {
  // shell sequence [1, 2, 4, 9, 19, 39, 78, 156, 312, 625, 1250, 2500, 5000]
  const n = array.length;
  const gaps = [];
  let gap = n;
  while (gap != 1) {
    gap = gap >> 1; // 相當於 Math.floor(gap / 2)
    gaps.unshift(gap);
  }

  while ((gap = gaps.pop())) {
    for (let g = 0; g < gap; g++) {
      for (let i = g + gap; i < n; i += gap) {
        let target = array[i];
        if (target < array[i - gap]) {
          let j = i;
          while (j > 0 && array[j - gap] > target) {
            array[j] = array[j - gap];
            j -= gap;
          }
          array[j] = target;
        }
      }
    }
  }
}

function getSedgewickSeq(n) {
  const array = [];
  let startup1 = 0;
  let startup2 = 2;
  for (let i = 0; i < n; i++) {
    if (i % 2 == 0) {
      array[i] = 9 * Math.pow(4, startup1) - 9 * Math.pow(2, startup1) + 1;
      startup1++;
    } else {
      array[i] = Math.pow(4, startup2) - 3 * Math.pow(2, startup2) + 1;
      startup2++;
    }
    if (array[i] >= n) {
      break;
    }
  }
  return array;
}

/**
 * Shell sort algorithm (Sedgewick sequence)
 * @param {number[]} array
 */
function shellSort3(array) {
  const n = array.length;
  const gaps = getSedgewickSeq(n);
  let gap = 1;

  while ((gap = gaps.pop())) {
    for (let g = 0; g < gap; g++) {
      for (let i = g + gap; i < n; i += gap) {
        let target = array[i];
        if (target < array[i - gap]) {
          let j = i;
          while (j > 0 && array[j - gap] > target) {
            array[j] = array[j - gap];
            j -= gap;
          }
          array[j] = target;
        }
      }
    }
  }
}

export { shellSort, shellSort2, shellSort3 };
