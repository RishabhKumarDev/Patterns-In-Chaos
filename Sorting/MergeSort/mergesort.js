let arr = [3, 2, 4, 1, 3];

function mergeSort(arr, low = 0, high = arr.length - 1) {
  if (low === high) return; // if this is true that means the arr length is one 
  let mid = Math.floor((low + high) / 2);  // to find the middle of the arr at each steps 
  mergeSort(arr, low, mid); // arr is actual arr, low is 0 and mid will act as the high for the next function(cuz we assume that part as a array(hypothicatlly))
  mergeSort(arr, mid + 1, high); // here mid + 1 act as the low for the next arr and high as the last index;
  merge(arr, low, mid, high); 
  return arr;
}

function merge(arr, low, mid, high) {
  let temp = []; // create a array to store smaller values;
  let left = low; // to compare (2 pointers)
  let right = mid + 1; // to compare (2 pointers)
  while (left <= mid && right <= high) {
    // checks if the left is less than the mid { cuz low to mid is the sorted arr} vice versa for right;
    if (arr[left] <= arr[right]) {
      // if arr's vlaue at left is smaller or equal to the value at right we push it to the temp arr;
      temp.push(arr[left]); // push the value;
      left++; // increase the left so the pointer moves to the next value;
    } else if (arr[left] > arr[right]) {
      // if the left is greater than the value at right then we push the right to temp;
      temp.push(arr[right]); // push right to temp
      right++; // increase the pointer to next value;
    }
  }
  // there will be times when the while loop above will stop when one of the condition
  //  will be false and that will leave one of the arr unmearged (i.e arr will not be added to temp)
  while (left <= mid) {
    // if the left(i.e low the sorted arr) still less than the mid
    temp.push(arr[left]); // push all the values one by one to temp
    left++; // increse the pointer;
  }
  while (right <= high) {
    // same reason as left;
    temp.push(arr[right]);
    right++;
  }

  // we need to replace all the values of the main arr with the temp arr cuz temp is getting created in each function so there no way to keep track of the sorted arr;
  // we are looping through the temp arr and passing the values to the main arr at the right position.
  for (let i = 0; i < temp.length; i++) {
    // loop form 0 to <temp to replace all the values
    arr[low + i] = temp[i]; // [low + i]=> cuz at each step the arr starts from the low value ( remember mid)
    //  so we need to pass the value exactaly at the low index so the merging is happend at the right place.
    // we add i with low cuz the main arr index starts from the low and we add i to it so it can increase till the temp arr and all the values gets added;
    // why we add low and i ?
    //  first at each time merge is called it gets a divided arr that starts form "low" and that is the 0th index of res. so to update the correct index value we'll need "low".
    //  low = the index from where the arr starts and in main arr low is the index of where the divided low started.
    // adding i ? = cuz we need to increase the counter.
    // eg: let arr = [3, 2, 4, 1, 3] , we add these so the main arr index increase with the res index (starting from low cuz that were the divided arr starts)
    // assume the divided arr starts form index = 2; so, for merge that'll be low and for arr that'll be the place where low started
    // and adding i do this = low + i = 2 + 0 = 2 so the res[0] 
    //  second = 2+i = 2+1 = 3 so the res[1] 
    // we are doing this because we have to put the sorted values at the right place and the right place is "low"; and not 0 cuz that'll be the start 
  }
}
console.log(mergeSort(arr));


// TIME COMPLEXITY
// Splitting the Array: The recursion tree divides the array in half at each level. The height of this tree is O(log n) because each time you divide the array into two halves.

// Merging the Arrays: At each level of the recursion, you need to merge all the elements of the array, which takes O(n) time.

// So, the total time complexity is O(n * log n), where n is the number of elements in the array.