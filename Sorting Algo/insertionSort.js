// Implementaion
function insertionSort(arr, n) {

      for(let i = 1;i<n;i++){
        key = arr[i];
        let j = i-1;
        while(arr[j]>key&&j>=0){
            arr[j+1]=arr[j]
            j=j-1;
        }
        arr[j+1]=key
      }
    
    return arr;
  }
  
  // Driver Code
  let arr = [34, 22, 44, 56, 42, 13, 66];
  let n = arr.length;
  let result = insertionSort(arr, n);
  console.log(result);
  