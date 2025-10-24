let arr = [];
let nums = [1, 2, 9, 10, 1, 111, 19, 12, 1];
let k = 29;
let sum = 0;
let found = false;

function sumSub(i, arr, sum) {
  if (i >= nums.length) {
    if (sum === k && !found) {
      console.log(arr);
      found = true;
    }
    return;
  }

  arr.push(nums[i]);
  sum += nums[i];
  sumSub(i + 1, arr, sum);

  arr.pop();
  sum -= nums[i];

  sumSub(i + 1, arr, sum);
}

sumSub(0, arr, sum);
