function main(){
    let arr = [2,35,623,23,1,4,5,77,34];
    console.log(insertion(arr));
    console.log(recursiveInsertion(arr,1))

}


function insertion(arr){
    for(let i=1; i <arr.length; i++){
        let j=i;
        while(j > 0 && arr[j-1] > arr[j] ){
            [arr[j],arr[j-1]] = [arr[j-1],arr[j]];
            j--;

        }
    }
    return arr;
}

function recursiveInsertion(arr,start){
    if(start === arr.length) return ;

    let j = start;
    while(j > 0 && arr[j-1] > arr[j] ){
        [arr[j],arr[j-1]] = [arr[j-1],arr[j]];
        j--;
    }

    recursiveInsertion(arr,start+1);
    return arr;
}
main();