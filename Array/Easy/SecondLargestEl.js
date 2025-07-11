
//-----------------------BRUTE Force---------------------
let arr = [3,9,7,5,4,3,2,1];
let arr2 = [12,12,12,12,12,12]
let arr3 = [7,9,7,7,7,7,17,17,17,7,6,7,3,8,9,9,9,9,9,8, 8]
let arr4 = [2]


function sortSecLar(arr){
    for(let i=0; i < arr.length -1 ; i++){
        let min = i;
        for(let j = i +1; j< arr.length; j++ ){
            if(arr[min] > arr[j]){
                min = j
            }
        }
        [arr[i],arr[min]] = [arr[min],arr[i]]
    }
   let lar = arr[arr.length -1];
   for(let i = arr.length-2; i >=0 ; i--){
      if(arr[i] !== lar && arr[i] < lar){
        return arr[i]
      }
   }
}

console.log(sortSecLar(arr),"sorted brute force")

// -------------another brute force-------------
function secLar2(arr){
    let lar = arr[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i] > lar){
            lar = arr[i]
        }
    }

    let sLar = -1;
    for(let j=0; j<arr.length; j++){
        if(arr[j] > sLar && arr[j] !== lar){
            sLar = arr[j]
        }
    }

    return sLar;
}
console.log(secLar2(arr),"brute force 2")
// ----------------------------Second largest ( optimised( TC= O(n)))-------------------

function secLar(arr){
        let largest = -Infinity;
        let secondLar = -Infinity;
        if(arr.length === 1) return arr[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i] > largest){
            secondLar = largest;
            largest = arr[i];
        }else if( arr[i] !== largest && arr[i] > secondLar ){
              secondLar = arr[i];
        }
    }
    if(secondLar === -Infinity) return -1;
    return secondLar;

}

console.log(secLar(arr));
console.log(secLar(arr2));
console.log(secLar(arr3))
console.log(secLar(arr4))
//======================SECond Smallest++++++++++++++++++++++++++++++++++
function secSmallest(arr){
        let smallest = Infinity;
        let secondSmallest = Infinity;
        if(arr.length === 1) return arr[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i] < smallest){
            secondSmallest = smallest;
            smallest = arr[i];
        }else if( arr[i] !== smallest && arr[i] < secondSmallest ){
              secondSmallest = arr[i];
        }
    }
    if(secondSmallest === Infinity) return -1;
    return secondSmallest;

}

console.log(secSmallest(arr))
console.log(secSmallest(arr2))
console.log(secSmallest(arr3))
console.log(secSmallest(arr4))
