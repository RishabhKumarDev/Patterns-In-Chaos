
let arr = [1,3,5,2,6,7,2,2];
let arr2 = [1,2,3,4,55,34,];



function secondLargest(arr){

    let largest = arr[0];
    let sLargest = -1;
    for(let i=0; i< arr.length; i++){
        if(arr[i] > largest){
            sLargest = largest;
            largest = arr[i];
        }else if(arr[i] !== largest && arr[i] > sLargest){
            sLargest = arr[i];
        }
    }
    
    return sLargest;
}

function secondSmall(arr){
    let smallest = arr[0];
    let secondSmallest = Infinity;

    for(let i = 0; i<arr.length; i++){
        if(arr[i] < smallest){
            secondSmallest = smallest;
            smallest = arr[i];
        }else if(arr[i] < secondSmallest && arr[i] !== smallest){
            secondSmallest = arr[i];
        }
    }

    return secondSmallest;
}

function secondLarAndSmall(arr,arr2){

    let sLar = secondLargest(arr);
    let sSml = secondSmall(arr2);
    return [sLar,sSml];
    
}

console.log(secondLarAndSmall(arr,arr2))