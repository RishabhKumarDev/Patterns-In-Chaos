let arr = [0,0,3,3,4,4,5,6];
let arr2 =[-2, 2, 4, 4, 4, 4, 5, 5];
// TC= O(n^2); 

function removeDuplicates(arr){
    let i = 0;
   while(i < arr.length -1){
    if(arr[i] === arr[i+1]){
        arr.splice(i+1,1);
    }else{
        i++;
    }
   }
    return arr;

}

// console.log(removeDuplicates(arr2));

//  Most easy soultion {TC= O()}
function removeDuplicates3(arr){
    let set = new Set(arr);
    return [...set]; // destructuring creates a new arr not reference of the array.

}

console.log(removeDuplicates3([-2, 2, 4, 4, 4, 4, 5, 5]))
console.log(removeDuplicates3([0, 0, 3, 3, 5, 6]))

// land
    function removeDuplicates2(arr){
        let dupl = [];
        for(let i = 0; i< arr.length  ; i++ ){
            if(arr[i] !== arr[i+1]){
                dupl.push(arr[i]);
            
            }
        }
        return dupl;
    }
console.log(removeDuplicates2(arr2))
// TC = O(n) , SC = O(1)

function striversWay(arr){
    let i = 0;
    for(let j = 1; j< arr.length; j++){
        if(arr[i] !== arr[j] ){
            arr[i+1] = arr[j];
            i++;
        }
    }

    return arr.splice(0,i+1);
}


console.log(striversWay([1,1,2,2,2,3,3]))