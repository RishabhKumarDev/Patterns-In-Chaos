let arr = [1, 2, 3, 3, 3, 3, 4, 5, 5, 5, 6, 6];
let arr2 = [9, 8, 7, 6, 5, 4, 3, 3, 2];

// ---------Optimised   (TC= O(n))-----------

function sortedOp(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
           return false;
    }
  }
  return true;
}

console.log(sortedOp(arr),"optimised version")
console.log(sortedOp(arr2),"optimised version")


// -------------------complicated and BRute force(TC=n Logn + n)

function merge(arr, start, end, mid) {
  let temp = [];
  let left = start;
  let right = mid + 1;

  while (left <= mid && right <= end) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else if (arr[left] > arr[right]) {
      temp.push(arr[right]);
      right++;
    }
  }

  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }

  while (right <= end) {
    temp.push(arr[right]);
    right++;
  }

  for (let i = 0; i < temp.length; i++) {
    arr[start + i] = temp[i];
  }
  return arr;
}
function isSort(arr) {
  let realArr = [...arr];
  function mergeSort(arr, start = 0, end = arr.length - 1) {
    if (start >= end) return;
    let mid = Math.floor((start + end) / 2);
    mergeSort(arr, start, mid);
    mergeSort(arr, mid + 1, end);
    merge(arr, start, end, mid);
    return arr;
  }

  let sortedArray = mergeSort(arr);

  for (let i = 0; i < realArr.length; i++) {
    if (realArr[i] !== sortedArray[i]) {
      return false;
    }
  }

  return true;
}

console.log(isSort(arr));
console.log(isSort(arr2));
