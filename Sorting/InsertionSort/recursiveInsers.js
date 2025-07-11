let arr = [9,8,7,6,5,4,3,2,1];

function recursiveInsertion(arr,start=1){
    if(start === arr.length) return;
    let j = start;
    while(j>0 && arr[j-1] > arr[j]){
        [arr[j-1],arr[j]] = [arr[j],arr[j-1]]
        j--;
    }
    recursiveInsertion(arr,start+1);
    return arr;
}

console.log(recursiveInsertion(arr))