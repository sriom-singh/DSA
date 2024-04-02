// Implementaion
function bubbleSort(arr, n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i + 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swapping
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// Driver Code
let arr = [34, 22, 44, 56, 42, 13, 66];
let n = arr.length;
let result = bubbleSort(arr, n);
console.log(result);
