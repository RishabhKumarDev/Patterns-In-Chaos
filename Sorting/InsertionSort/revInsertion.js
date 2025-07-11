// let arr = [9,8,7,6,5,4,3,2,1];
let arr = [14, 9, 15, 12, 6, 8, 13];

function reviInsertion(arr) {
  for (let i = 1; i < arr.length ; i++) {

    let j=i;
    while(j > 0 && arr[j] < arr[j-1]){
        [arr[j],arr[j-1]] = [arr[j-1],arr[j]];
        j--;
    }
  }
  return arr
}

console.log(reviInsertion(arr));
