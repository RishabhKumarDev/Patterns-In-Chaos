function main() {
  let arr = [1, 6, 7, 4, 8, 23, 78, 34, 56];
  console.log(mergeSort(arr));
}

function mergeSort(arr, start = 0, end = arr.length - 1) {
  if (start >= end) return arr;
  let mid = Math.floor((start + end) / 2);

  mergeSort(arr, start, mid);
  mergeSort(arr, mid + 1, end);
  return merge(arr, start, mid, end);
}

function merge(arr, start, mid, end) {
  let res = [];
  let left =start ;
  let right = mid +1;

  while(left <= mid && right <= end){
    if(arr[left] <= arr[right]){
        res.push(arr[left]);
        left++;
    }else{
        res.push(arr[right])
        right++;
    }
  }
  if(left <= mid){ // earlier i didn't applied = cuz i thought if the left is at mid then it should have been added but the pointer moes +1 if added so, if the pointer left is at mid that means the previous element was added.
    for(let i= left; i<= mid; i++){
        res.push(arr[i]);
    }
  }

  if(right <= end){
    for(let i = right; i <= end; i++){
        res.push(arr[i]);
    }
  }
  for(let i = 0; i<res.length; i++){
    arr[start + i] = res[i]
  }
  return res;v
}

main();
