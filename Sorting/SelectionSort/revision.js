function main(){
    let arr = [12,23,3,4,5,6,55,7434,132];
    console.log(selectionSort(arr));
    console.log(recursiveSelection(arr));

}

function selectionSort(arr){
    for(let i=0; i< arr.length -1; i++){
         let min = i;
         for(let j = i+1; j<arr.length; j++){
            if(arr[j] < arr[min]){
                min = j;
            }

         }
         [arr[i],arr[min]]=[arr[min],arr[i]]
    }

    return arr;
}

function recursiveSelection(arr,i = 0){
    if(i === arr.length-2) return arr;

    let min = i;
    for ( let j = i +1 ; j < arr.length; j++){
        if(arr[j] < arr[min]){
            min = j;
        }
    }
    [arr[i],arr[min]] = [arr[min],arr[i]];

   return recursiveSelection(arr,i+1);
}
main();