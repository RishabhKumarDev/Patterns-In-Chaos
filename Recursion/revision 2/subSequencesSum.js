(() => {
  let nums = [1, 2, 1];
  let i = 0;
  let sum = 0;
  let k = 2;
  console.log(subSeqSum(i, (arr = []), sum));

  function subSeqSum(i, arr, sum) {
    if (i === nums.length) {
      if (sum === k) {
        console.log(arr);
      }
      return;
    }
    arr.push(nums[i]);
    sum += nums[i];

    subSeqSum(i + 1, arr, sum);

    arr.pop();
    sum -= nums[i];

    subSeqSum(i + 1, arr, sum);
  }
})();
