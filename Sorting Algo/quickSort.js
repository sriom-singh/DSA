function quickSort(arr, p, q) {
  if (p < q) {
    let mid = partition(arr, p, q);
    quickSort(arr, p, mid - 1);
    quickSort(arr, mid + 1,q);
  }
  return arr;
}

function partition(arr,p,q){
    let pivot = arr[p];
    let i = p;

    for(let j=i+1;j<q+1;j++){
        if(pivot>=arr[j]){
            i++;
            [arr[i],arr[j]] =  [arr[j],arr[i]]
        }
    }
    [arr[p],arr[i]] = [arr[i],arr[p]]
    return i;
}

let arr = [20,10,25,80,30,50,60,90]
console.log(quickSort(arr,0,arr.length-1));