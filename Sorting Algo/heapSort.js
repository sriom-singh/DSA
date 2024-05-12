function heapify(arr, i, n) {
  let smallest = i;
  let right = i * 2 + 2;
  let left = i * 2 + 1;

  if ((left < n, arr[left] < arr[smallest])) {
    smallest = left;
  }
  if ((right < n, arr[right] < arr[smallest])) {
    smallest = right;
  }
  if (smallest != i) {
    [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
    heapify(arr, smallest, n);
  }
}

function buildHeap(arr) {
  let startIndex = Math.floor(arr.length / 2) - 1;

  for (let i = startIndex; i >= 0; i--) {
    heapify(arr, i, arr.length);
  }
  return arr;
}
let arr = [20, 10, 25, 80, 30, 50, 60, 90];
console.log(heapSort(arr));

function heapSort(arr) {
  buildHeap(arr);
  let temp = [];
  while (arr.length > 0) {
    let element = arr[0];
    arr[0] = arr[arr.length - 1];
    arr.pop(arr[arr.length - 1]);
    heapify(arr, 0, arr.length);
    temp.push(element);
  }
  return temp;
}
