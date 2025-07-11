function main() {
//   let arr = [1, 2, 3, 4, 5, 6, 7, 8, 19, 21, 62, 78, 84];
let arr = Array.from({length: 1000}, (_, i) => i + 1);

  let tar = 500;
  console.log(binarySearch(arr, tar, 0, arr.length - 1));
}

function binarySearch(arr, tar, start, end) {

    if(start > end ) return -1;
  let mid = Math.floor((start + end) / 2);

  if (arr[mid] === tar) return mid;
  if (arr[mid] < tar) return binarySearch(arr, tar, mid + 1, end);
  if (arr[mid] > tar) return binarySearch(arr, tar, start, mid - 1);
}

main();
// console.log(binarySearch([1, 2, 3, 4, 5], 3, 0, 4));  // Output: 2
// console.log(binarySearch([], 1, 0, -1));             // Output: -1
// console.log(binarySearch([5], 5, 0, 0));             // Output: 0
// console.log(binarySearch([5], 2, 0, 0));             // Output: -1
