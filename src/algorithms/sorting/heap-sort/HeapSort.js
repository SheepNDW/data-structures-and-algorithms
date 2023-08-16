import { swap } from '../SortTestUtils';

function maxHeapifyDown(array, index, heapSize) {
  let parent = index;
  while (parent < heapSize) {
    let left = 2 * parent + 1;
    let largest = null;

    if (left < heapSize) {
      largest = left;
      let right = left + 1;
      if (right < heapSize && array[left] < array[right]) {
        // 存在右子節點，且比左子節點大
        largest = right;
      }
    }

    if (largest !== null && array[parent] < array[largest]) {
      swap(array, parent, largest);
      parent = largest; // 修正父節點的 index
    } else {
      break;
    }
  }
}

function minHeapifyDown(array, index, heapSize) {
  let parent = index;
  while (parent < heapSize) {
    let left = 2 * parent + 1;
    let smallest = null;

    if (left < heapSize) {
      smallest = left;
      let right = left + 1;
      if (right < heapSize && array[left] > array[right]) {
        // 存在右子節點，且比左子節點小
        smallest = right;
      }
    }

    if (smallest !== null && array[parent] > array[smallest]) {
      // 讓父節點與最小的子節點交換，確保值小的在上面
      swap(array, parent, smallest);
      parent = smallest; // 修正父節點的 index
    } else {
      break;
    }
  }
}

function popMin(heap, heapSize) {
  const min = heap[0];
  heap[0] = heap[heapSize - 1];
  minHeapifyDown(heap, 0, heapSize - 1);
  return min;
}

function heapSort(array) {
  const n = array.length;
  // 陣列現在分成兩區，左側是 max heap，右側是已排序的元素
  for (let i = n >> 1; i >= 0; i--) {
    maxHeapifyDown(array, i, n); // 找到最後一個非葉節點並將其與子節點比較
  }

  // 現在 array[0] 是 heap 的根節點，也就是最大的元素
  for (let i = n - 1; i > 0; i--) {
    swap(array, 0, i); // 將最大元素移動到已排序區的最前面
    maxHeapifyDown(array, 0, i); // 將剩下的元素重新構建成 max heap
  }
}

function heapSort2(array) {
  const n = array.length;
  const heap = [...array];

  for (let i = n >> 1; i >= 0; i--) {
    minHeapifyDown(heap, i, n);
  }

  // 依序從 heap 中取出最小的元素覆蓋到 array 中對應的位置
  for (let i = 0; i < n; i++) {
    array[i] = popMin(heap, n - i);
  }
}

export { heapSort, heapSort2, maxHeapifyDown, minHeapifyDown };
