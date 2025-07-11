function main() {
  let arr = [1, 2, 2, 3, 3, 3, 4];
  console.log(sumOfFrequencies(arr));
}

function sumOfFrequencies(arr) {
  let map = new Map();

  for (let num of arr) {
    
    map.set(num, (map.get(num) || 0) + 1);

  }
  let res = 0;
  for(const [key,value] of map.entries()){
    if(value > 1 )  res+=key;
  }

  return res;
}

main();
