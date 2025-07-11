let arr = [1,2,3,4,5,6,7];
let arr2 = [7,6,8,5,4,3,2,1];

function reviBub(arr){
    
    for(let i = 0; i < arr.length - 1; i++ ){ // outer loop runs for the n time 
         let swapped = false; // optimization :- if this false after 2nd loop that means all are elements are were sorted and if condition was never checked;
        for(let j = 0; j < arr.length -1 -i; j++){ // loop runs for n - i times cuz at each step 1 element is getting sorted at last;

            if(arr[j +1 ] > arr[j]){ //checks if the element is greater than the other
                [arr[j+1], arr[j]] = [arr[j],arr[j+1]]; // swap
                swapped = true; // if any element is swaped then only it is true;
            }
        }
        if(!swapped){ // if the swapped is false there were no greater element;
            console.log('hi')
            break;
        }
    }
    return arr
}

console.log(reviBub(arr))
console.log(reviBub(arr2))
