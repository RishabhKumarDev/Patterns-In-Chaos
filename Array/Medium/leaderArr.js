function main() {
  let nums = [-3, 4, 5, 1, -4, -5],
    nums1 = [1, 2, 5, 3, 1, 2];
  let n = nums.length;
  //   console.log(leaderArrBrute(nums, n));
  //   console.log(leaderArrBrute(nums1, n));

  // optimiszed
  console.log(leaderArrOp(nums, n));
  //   console.log(leaderArrOp(nums1, n));
}

function leaderArrBrute(arr, n) {
  let leaders = [];

  for (let i = 0; i < n; i++) {
    let leader = true;
    for (let j = i + 1; j < n; j++) {
      if (arr[i] <= arr[j]) {
        leader = false;
        break;
      }
    }
    if (leader) leaders.push(arr[i]);
  }

  return leaders;
}

function leaderArrOp(nums, n) {
  let leaders = [];
  let leader = nums[n - 1];
  leaders.push(leader);

  for (let i = n - 2; i >= 0; i--) {
    if (nums[i] > leader) {
      leader = nums[i];
      leaders.push(leader);
    }
  }
  
  return leaders.reverse();
}

main();
