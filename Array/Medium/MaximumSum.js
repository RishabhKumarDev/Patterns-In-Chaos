function main() {
  let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
  console.log(maxSumbrute1(nums));
  console.log(maxSumbrute(nums));
  console.log(maxsumBetter(nums));
}
function maxSumbrute1(nums) {
  // TC= O(n^3)
  let sum = 0,
    maxSum = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      sum = 0;
      for (let k = i; k <= j; k++) {
        sum += nums[k];
      }
      maxSum = Math.max(maxSum, sum);
    }
  }
  return maxSum;
}
function maxSumbrute(nums) {
  // TC= O(n^2)

  let sum = 0,
    maxSum = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      maxSum = Math.max(maxSum, sum);
    }
  }

  return maxSum;
}

function maxsumBetter(nums) {
  let sum = 0,
    maxSum = -Infinity,
    srtInd, lastInd, res ,tempStart=0;

  for (let i = 0; i < nums.length; i++) {

    sum += nums[i];

    
    if (sum > maxSum) { // if the sum is greater then maxSum that mean this is the new max sub array, which start from el we found after making the sum 0;
                    
      maxSum = sum; // new max sum will be the sum as it is bigger 
      srtInd = tempStart; // now this get's updated with the tempStart as that's where the subarray start from;
      lastInd = i; // current index will for sure we the last index of the sub array with the largest sum, and if in the next addition it get larger then it will again update.
    }

    if (sum < 0) { 
      sum = 0;
      tempStart=i+1; // update everytime the sum is < 0 cuz the next el can be our new max index that's why +1; 
    }
  }

//   for(let i = srtInd; i<= lastInd; i++){
//     res.push(nums[i]);
//   }
res = nums.slice(srtInd,lastInd+1);

  return [maxSum , res]
}

main();
