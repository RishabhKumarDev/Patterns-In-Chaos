let nums = [1, 2, 1];
let k = 2;
let sum = 0;
let arr = [];

function countSubSequence(i, arr, sum) {
  if (i >= nums.length) {
    if (sum === k) {
     
      return 1
    }
    return 0;
  }

  arr.push(nums[i]);
  sum += nums[i];

  let left = countSubSequence(i + 1, arr, sum);

  arr.pop();
  sum -= nums[i];

  let right = countSubSequence(i + 1, arr, sum);

  return left + right;
}

console.log(countSubSequence(0, arr, sum));
