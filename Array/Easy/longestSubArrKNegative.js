function main() {
  const arr = [1, 2, 3, -2, 5];
  const K = 5;
  const n = arr.length;

  console.log(longestSubarrayWithSumK(arr, n, K));
}

function longestSubarrayWithSumK(arr, n, k) {
  let map = new Map();
  let maxLongets = 0;
  let sum = 0;

  for (let i = 0; i < n; i++) {

    sum+= arr[i]; 

    if(sum === k){ // if the prefix is = k the directly update it.
        maxLongets = Math.max( maxLongets , i+1);
    }

    if(map.has(sum - k ) ){ // if the prefix[j] is there that mean j+1 to i is the K.
        let j = map.get(sum - k);
        maxLongets = Math.max( maxLongets , i - j );
    }

    if( !map.has(sum)){ // puts the prefix[j] and i.
        map.set(sum,i);
    }

  }

  return maxLongets;
}

main();
