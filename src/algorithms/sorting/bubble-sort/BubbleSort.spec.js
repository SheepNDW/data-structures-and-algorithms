import { describe, expect, it } from 'vitest';
import { bubbleSort, bubbleSort1, bubbleSort2, bubbleSort3, cocktailSort } from './BubbleSort';
import { sortedArr, notSortedArr, negativeArr, negativeArrSorted } from '../SortTestUtils';
import { shuffle } from '@/algorithms/fisher-yates-shuffle/shuffle';

describe('Bubble Sort', () => {
  it('should sort array', () => {
    const array = [...notSortedArr];

    bubbleSort(array);

    expect(array).toEqual(sortedArr);
  });

  it('should sort array with negative numbers', () => {
    const array = [...negativeArr];

    bubbleSort(array);

    expect(array).toEqual(negativeArrSorted);
  });
});

describe.skip('Test Optimized Bubble Sort', () => {
  it('測試三種 bubble sort 耗時', () => {
    test(bubbleSort1);
    test(bubbleSort2);
    test(bubbleSort3);
    test(cocktailSort);
  });
});

function test(sortedFn) {
  const array = [];
  // 向陣列寫入 10000 個資料，其中前 1000 個資料倒序，後 9000 個資料順序
  for (let i = 0; i < 10000; i++) {
    if (i < 1000) {
      array[i] = 1000 - i;
    } else {
      array[i] = i;
    }
  }
  console.log('========');
  let start = new Date() - 0;
  sortedFn(array);
  console.log('部分有序的情況', sortedFn.name, new Date() - start);
  shuffle(array);
  start = new Date() - 0;
  sortedFn(array);
  console.log('完全亂序的情況', sortedFn.name, new Date() - start);
}
