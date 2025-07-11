function main() {
  let nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1, 1],
    n = nums.length;
    console.log(brute(nums, n));
  console.log(better(nums, n));
}
                                     // wrong ( it will only work if the sequence starts from the smallest valued element i.e if the sequence starts from 1 and go to 3 but the next sequence starts from 5 and go till 13 then 2nd is greater)
function brute(nums, n) {
  if (nums.length === 0) return 0;

  let smallest = Infinity;
  for (let i = 0; i < n; i++) {
    if (nums[i] < smallest) {
      smallest = nums[i];
    }
  }
  let count = 1;

  for (let i = 0; i < n; i++) {
    let found = false;
    for (let j = 0; j < n; j++) {
      if (nums[j] === smallest + 1) {
        smallest = nums[j];
        count++;
        found = true;
      }
    }
    if (!found) return count;
  }

  return count;
}

function better(nums, n) {
  if (nums.length === 0) return 0;
  let smallest = Infinity;

  let set = new Set(nums);

  for (let i = 0; i < n; i++) {
    if (nums[i] < smallest) {
      smallest = nums[i];
    }                                      /// wrong 
  }
  let count = 1;
  for (let i = 0; i < n; i++) {
    if(set.has(smallest+1)){
        smallest = smallest+1;
        count++;
    }
  }

  return count;
}

main();
