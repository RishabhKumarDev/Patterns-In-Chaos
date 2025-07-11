function main(){
    let arr = [1,4,5,23,3,1];
    console.log(recursiveBubble(arr,arr.length-1));
}

function recursiveBubble(arr,range){

    if(range === 1 ) return;

    let swaped = false;
    for(let i=0; i < range; i++){
        if(arr[i] > arr[i+1]){
            [arr[i],arr[i+1]] = [arr[i+1],arr[i]];
            swaped = true;
        }

    }
    if(!swaped) return arr;
    recursiveBubble(arr,range-1);
    return arr;
}


main();