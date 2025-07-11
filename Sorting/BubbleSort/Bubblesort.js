let arr = [13, 46, 24, 52, 20, 9];


// let arr = [9, 13, 20, 24, 46, 52];

function bubble(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let swapped = false;

    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) {
      console.log("hii")
      break;
    }
  }
  return arr;
}

console.log(bubble(arr));
