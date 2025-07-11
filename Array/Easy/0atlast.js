function main() {
  let arr = [0, 3, 4, 2, 0, 0, 1, 3];
  
  console.log(zeroAtLast2(arr));
}

function zeroAtLast(arr) {
  let i = 0;
  let j = 0;
  while (i < arr.length ) {
   if(arr[j]===0){
      if(arr[i] !==0){
          [arr[i],arr[j]]=[arr[j],arr[i]];
          j++;
          i++;
      }{
        i++;
      }
   }{
    j++;
   }
  
  }

  return arr;
}
// correct and striver one;

function zeroAtLast2(arr){
    let n = arr.length;
    let j = -1;

    for(let i=0; i<n; i++){
        if(arr[i] === 0 ){
            j = i;
            break;
        }
    }

    if(j === -1 ) return arr;

    for(let i= j+1; i<n; i++){
        if(arr[i]!==0){
            [arr[i],arr[j]] = [arr[j],arr[i]];
            j++;
        }
    }
    return arr;
}
main();
