function mergeSort(arr, l, r) {
  if (l < r) {
    // Divide
    let mid = Math.floor(l + (r - l) / 2);
    // Conquer
    mergeSort(arr, l, mid);
    mergeSort(arr, mid + 1, r);
    // Combine
    merge(arr, l, mid, r);
  }
  return arr;
}

function merge(arr, l, mid, r) {
  let i = l,
    k = l,
    j = mid + 1;
  let temp = [];
  while (i <= mid && j <= r) {
    if (arr[i] <= arr[j]) {
      temp[k] = arr[i];
      k++;
      i++;
    } else {
      temp[k] = arr[j];
      k++;
      j++;
    }
  }

  while (i <= mid) {
    temp[k] = arr[i];
    k++;
    i++;
  }
  while (j <= r) {
    temp[k] = arr[j];
    k++;
    j++;
  }

  for (let index = l; index <= r; index++) {
    arr[index] = temp[index];
  }
}

let arr = [20, 10, 25, 80, 30, 50, 60, 90];
console.log(mergeSort(arr, 0, arr.length - 1));
