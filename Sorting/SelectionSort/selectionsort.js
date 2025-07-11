let arr = [13, 46, 24, 52, 20, 9];

function sort(arr) {
  for (let i = 0; i < arr.length - 1; i++) { // runs for n times
    let min = i; // we consider i as the minimum value;
    for (let j = i+1; j < arr.length; j++) { // runs from i +1 to check the ith value and the value after it.
      if (arr[min] > arr[j]) { // checks for if the ith value ( i.e is the min value we considered ) is greater than any value in the arr if it is then it mean the other value is smaller thant the min we considered.
        min = j; // if the min value is greter than the jth value then we change the index value of the min.
      }
    }

    [arr[i], arr[min]] = [arr[min], arr[i]]; // till now we have found the smallest values index and changed it to min index / so here we swap it
     // with the ith value so the updated value comes at the right position ( in ascending order );
  }
  return arr;
}

console.log(sort(arr));

//--------------------======================-------------------
function sort2(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let max = i;
    for (let j = i; j >= 0; j--) {
      if (arr[j] > arr[max]) {
        max = j;
      }
    }
    if(i !== max){
        [arr[i], arr[max]] = [arr[max], arr[i]];

    }
  }
  return arr;
}


console.log(sort2(arr))