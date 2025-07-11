let arr = [1, 2, 3, 4, 5, 6, 7];
let arr2 = [7, 6, 8, 5, 4,  3, 2, 1];

function bubbleRecursive(arr, range) {
  if (range === 1) return;
  let swapped = false;
  for (let j = 0; j < range; j++) {
    if (arr[j + 1] > arr[j]) {
      [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      swapped = true;
    }
  }
  if (!swapped) {
    console.log("h",range);

    return arr;
  }

  bubbleRecursive(arr, range - 1);
  return arr;
}

// console.log(bubbleRecursive(arr, arr.length - 1));
console.log(bubbleRecursive(arr2, arr2.length - 1));
