function main() {
  let arr = [1, 2, 3, 7, 5, 2, 1, 1, 4, 2];
  let n = arr.length;
  let k = 10;
  console.log(subArrK(arr, n, k));
  console.log(subArrKOp(arr, n, k));

  //   constraints = elments are positve non-zero intergers....
}
//  brute force Tc= O(n^2)
function subArrK(arr, n, k) {
  let length = 0;
  for (let i = 0; i < n; i++) {
    let sum = 0; // earlier the sum was outside the outer loop and i was updating it to 0 after every condition check but if we just declare it after outer loop so it will be set to 0 every time :)
    for (let j = i; j < n; j++) {
      sum += arr[j];
      if (sum == k) {
        if (j - i + 1 > length) {
          length = j - i + 1;
          break;
        }
        break;
      } else if (sum > k) {
        break;
      }
    }
    if (sum != 0 && sum < k) {
      return length;
    }
  }

  return length;
}

// two pointers/ optimizied TC= O(n);

function subArrKOp(arr, n, k) {
  let length = 0;
  let start = 0;
  let sum = 0;
  for (let end = 0; end < n; end++) {
   
    sum += arr[end];

    while (sum > k) {
      sum -= arr[start];
      start++;
    }

    if (sum === k) {
     length = Math.max(end - start +1 , length);

      sum -= arr[start]; // this is a optimisation if only the elements are non-zero positive intigers. it just helps up skiping a step.
      start++;
    }
  }

  return length;
}

main();
