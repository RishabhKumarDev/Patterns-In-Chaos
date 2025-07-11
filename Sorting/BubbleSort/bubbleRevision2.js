function main(){
    let arr = [9,8,8,7,4,2,3,1];
    let arr1 = [1,2,3,4,5,6,7]
    console.log(bubbleSort(arr));
}

function bubbleSort(arr){

    for(let i=0; i<arr.length-1; i++){
        let swaped = false;
        for(let j=0; j< arr.length-i-1; j++){
            if(arr[j] > arr[j+1]){

                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
                swaped=true;
            }
        }
        if(!swaped) return arr;

    }

    return arr;
}

main();