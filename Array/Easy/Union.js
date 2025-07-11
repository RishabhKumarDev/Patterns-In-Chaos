function main() {
  let nums1 = [1, 2, 3, 4, 5];
  let nums2 = [1, 2, 7];
  console.log(union2(nums1, nums2));
}

function union(nums1, nums2) {
  let i = 0;
  let j = 0;
  let res = [];

  function ifNotDuplicate(val) {
    if (res.length === 0 || res[res.length - 1] !== val) {
      res.push(val);
    }
  }
  while (i < nums1.length && j < nums2.length) {
    // check if any one index reaches the end;
    if (nums1[i] < nums2[j]) {
      // if first array's element is small
      if (res[res.length - 1] !== nums1[i]) {
        // if the element to be pushed is alwready in the res or not
        res.push(nums1[i]); // if no then push
      }
      i++;
    } else if (nums1[i] > nums2[j]) {
      if (res[res.length - 1] !== nums2[j]) {
        res.push(nums2[j]);
      }
      j++;
    } else if (nums1[i] === nums2[j]) {
      if (res[res.length - 1] !== nums1[i]) {
        res.push(nums1[i]);
      }
      i++;
      j++;
    }
  }

  while (i < nums1.length) {
    if (res[res.length - 1] !== nums1[i]) {
      res.push(nums1[i]);
    }
    i++;
  }

  while (j < nums2.length) {
    if (res[res.length - 1] !== nums2[j]) {
      res.push(nums2[j]);
    }
    j++;
  }

  return res;
}


// in this we have a helper function cuz the code was repeating it self so many time so we wrote it and the code is much cleaner now.
function union2(nums1, nums2) {
  let i = 0,
    j = 0;
  let res = [];

  function helper(val) {
    if (res.length === 0 || res[res.length - 1] !== val) {
      res.push(val);
    }
  }
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
      helper(nums1[i++]);
    } else if (nums1[i] < nums2[j]) {
      helper(nums1[i++]);
    } else if (nums2[j] < nums1[i]) {
      helper(nums2[j++]);
    }
  }
  while (i < nums1.length) {
    helper(nums1[i++]);
  }
  while (j < nums2.length) {
    helper(nums2[j++]);
  }
  return res;
}

main();
