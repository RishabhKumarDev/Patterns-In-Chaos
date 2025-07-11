//------------------------------------- Optimsized Solution ( TC= O(n))

let arr = [3,5,6,8,1,0,3,]

function largestNo(arr){
    let largest = arr[0];
    for(let i= 0; i< arr.length; i++){
           if( arr[i] > largest){
            largest = arr[i];
           }
    }
    return largest;
}

console.log(largestNo(arr))

// ----------------------------------------using sorting ( B.F )( TC= O(n^2)) 

/* it can be done by all the sorting mehod cuz all the sorting will have largest on the last but the TC will be brute*/
function selectionSort(arr){
    for(let i=0; i<arr.length; i++){
        let min = i;
        for(let j=i; j<arr.length; j++){
            if(arr[i] > arr[j]){
                min = j
            }
        }
        [arr[i],arr[min]] = [arr[min],arr[i]];
    }
    let last = arr[arr.length -1 ]
    return last
}

console.log(selectionSort(arr))

