function main() {
  let nums = [0, 9, 10, 14, 13, 12, 11, 15, 18, 16, 17, 1, 2];
  //       [0,1,2,9,10,11,12,13,14,15,16,17,18]
  n = nums.length;
  console.log(brute(nums, n));
  console.log(better(nums, n));
  console.log(optimal(nums))
}
 
// optimal TC- O(n) and while loop only run for start of sequence. and the SC=O(n);
function optimal(nums){
    let numSet = new Set(nums); // use set for fast look up

    let maxCnt =0; 

    for(let num of nums){ // loop in the nums
        if(!numSet.has(num-1)){ // if current element -1 doesn't exist in the array that means that element is a start of a sequence.
            let curNum = num; // if the el is the start of the sequence then keep it for further checks
            let cnt = 1; // if we found one element from the sequence then the lenght of the sequence is 1.

            while(numSet.has(curNum+1)){ // now loop in the set till there is a element +1 greater in the array as that's part of the sequence.
                curNum+=1; // incrementing the value of curNum only when we found a greater vlue then the prev value 
                          // and then incrementing it's vlaue by one to look for another element that might be part of sequence.
                cnt++; // incrementing the count whenever we found a value.
            }

            maxCnt = Math.max(maxCnt,cnt); // after each while loop we check which count is greater.
        }
    }

    return maxCnt;
}


// better approach TC - O(n log n) for soring algo,, SC - O(1);
function better(arr, n) {
  let nums = arr.sort((a, b) => a - b);
  let cnt = 1,
    maxCnt = 1,
    x = nums[0];

  for (let i = 0; i < n; i++) {
    if (nums[i] === x + 1) {
      x = nums[i];
      cnt++;
      maxCnt = Math.max(maxCnt, cnt);
    } else if (nums[i] === x) {
    } else {
      x = nums[i];
      cnt = 1;
    }
  }

  return maxCnt;
}

// brute ( dude you were so close the logic was right, just you were not confident )

function brute(nums, n) {
  // TC=O(n^3);
  let maxCnt = 0;

  for (let i = 0; i < n; i++) {
    // this loop takes every i as the starting of sequence
    let el = nums[i];
    let cnt = 1; // common sense if el is starting the sequence then the length should be starting from 1.
    for (let j = 0; j < n; j++) {
      // this loop runs n times for every "el" and if the "el" is still same as the nums[i] then break( lil optimization)

      for (let k = 0; k < n; k++) {
        // this loop runs and check if the there is any value in the array that is just +1 bigger in value;

        if (nums[k] === el + 1) {
          // if it found any value that is biger than the el then..
          el = nums[k]; // if update the value with the array value as new "el" cuz we want to make the longest sequence and next time this new "el" will be used for comparision
          cnt++; // if a vlue is found increase the cnt as the sequence increased.
          // not putting any break as if in the same loop we can find a value greater than (lil optimization);
        }
      }
      if (el === nums[i]) break; // if after check the el is still same then break, no need to check further.
    }
    maxCnt = Math.max(maxCnt, cnt);
  }

  return maxCnt;
}

main();
