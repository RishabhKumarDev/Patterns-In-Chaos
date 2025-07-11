let arr = [4, 6, 2, 5, 7, 9, 1, 3];
let arr2 = [42, 16, 26, 51, 76, 69, 91, 13];

function quickSort(arr, start, end) {
  if (start >= end) return; // if the start and end is same that means the length of the arr we are creating is 1{ why not arr.length ==1 cuz we are not creating a new array or reducing the old array we are just passing diff indexs}

  let pivot = start; // the value which will be compared to find smaller and bigger values;
  let marker = start + 1; // the index from where the swaping of smaller values will be done { this also helps in finding the index where the pivot should go}
  for (let i = start + 1; i <= end; i++) {
    // in this approach the loop runs after the selected pivot so we don't compare the pivot;
    if (arr[i] < arr[pivot]) {
      // here we check if ith value is smaller than the selected pivot
      [arr[i], arr[marker]] = [arr[marker], arr[i]]; // we swap the smaller value with the marker{ not with the pivot cuz the pivot value shoud be same for each complete iteration}
      marker++; // we increase the marker vlaue cuz the old marker alwready have a smaller value;
    }
  }
  [arr[start], arr[marker - 1]] = [arr[marker - 1], arr[pivot]]; // we swap the pivot we selected with the place where the last smalles value is kept
  // { why marker -1 cuz each time the smaller value gets swaped it increase the marker and the last time it got swaped it increased the marker by one so we subtract it by 1;}

  let p = marker - 1; // this is the place where the pivot value is kept { we use this to declare the left side array and right side array}
  quickSort(arr, start, p - 1); // we are passing p-1 as the end point of the left side arr cuz the value after that is the prev pivot and thats sorted before that we need to create a new arr to sort
  quickSort(arr, p + 1, end); // we are passing p + 1 as the starting point of the right side arr cuz the value before that is the prev pivot and thats sorted after that we need to create a new arr to sort

  return arr;
}

// console.log(quickSort(arr, 0, arr.length - 1));
// console.log(quickSort(arr2, 0, arr2.length - 1));

// ______________________----------------------STRIVERS WAY QUICK SORT { better than above }-----------------------------________________________

function striverQuick(arr, low, high) {
  if (low >= high) return; // if true that means the size of arr is one;
  let pivot = arr[low]; // storing the pivot value and not just index cuz we are swaping the pivot in place that can change the index of pivot;
  let i = low; // declaring i cuz we are using whlile loop
  let j = high;

  while (i < j) { // this check is to stop the loop if j and i crosses each other ( if i is gerter than j that means the j have crossed i (i=3 , j=2))
    while (i <= high && arr[i] <= pivot) { // here we check if i is always less than high cuz if it exides the high then it will thow error { this can happen when the i starts from high}
                                          // also the second check is if the value of i is smaller or equal then the pivot then the loop will run but onece we find the greter value the loop stops (so we can use that value to swap ( cuz that value will be the first greater value found ))
      i++;     // if the conditions are true we increase the i to move the loop ahead                           
    }
    // let greater = arr[i];
    while (j >= low && arr[j] > pivot) { // here we check if j is always greter than the low cuz if not it can throw error when the while loop starts when j=high and high can be 0.
                                       // second condition is checking if the value of j is greter than the pivot if not the loop stop at the index whose value is smaller than the pivot( so we can use it to swap with the value at the index i which is greater )
      j--; // if condition is true that mean we havn't found the smaller value so we sub one so loop move to the next value;
    }
    // let smaller = arr[j];
    if (i < j) { // before swaping its important to check if the index no. of i is smaller then the j cuz if not that means they have crossed each other { why? cuz if we swap after they have crossed each other that mean one greater value will be in left side where only smaller value should be and vice versa }
      [arr[i], arr[j]] = [arr[j], arr[i]]; // we swap the vlues 
    } 
  }
  [arr[low], arr[j]] = [arr[j], arr[low]]; // we swap the j with the pivot { cuz the by doing this we put the pivot at the right position and j is the last index where the smallest value is ( and swaping it with smallest value is okay cuz the pivot is at the low so the smallest values stays at left side) }
  // let p = j;
  striverQuick(arr, low, j - 1); // here j is where the pivot is so the j-1 index is weher the left arr should end(high) cuz value at j is sorted we use it to divide the arr.
  striverQuick(arr, j + 1, high); // here j + 1 act as the low point from where the next arr will start
  return arr;
}

// console.log(striverQuick(arr, 0, arr.length - 1));

