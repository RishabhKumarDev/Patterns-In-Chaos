let arr = [14, 9, 15, 12, 6, 8, 13];



function insertion(arr){

  for(let i=1; i<arr.length; i++){
    let j = i;
    while (j >0 && arr[j-1] > arr[j]) {
      [arr[j-1],arr[j]] = [arr[j],arr[j-1]]
      j--;
    }

  }
  return arr;
}

console.log(insertion(arr))