// Implementaion
function selectionSort(arr, n) {
  for (let i = 0; i < n; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        // assigning min variable to new minimum value's index
        min = j;
      }
    }
    // Swapping to minimum value
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
}

// Driver Code
let arr = [34, 22, 44, 56, 42, 13, 66];
let n = arr.length;
let result = selectionSort(arr, n);
console.log(result);
