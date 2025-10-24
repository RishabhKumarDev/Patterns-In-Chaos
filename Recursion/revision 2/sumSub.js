let arr = [];
let nums = [1, 2, 9, 10, 1, 111, 19, 12, 1];
let k = 29;
let sum = 0;
let found = false;

function sumSub(i, arr, sum) {
  if (i >= nums.length) {
    if (sum === k) {
      console.log(arr);
      return true;
    }
    return false;
  }

  arr.push(nums[i]);
  sum += nums[i];
  if (sumSub(i + 1, arr, sum)) {
    return true;
  }

  arr.pop();
  sum -= nums[i];

  if (sumSub(i + 1, arr, sum)) {
    return true;
  }

  return false;
}

sumSub(0, arr, sum);
