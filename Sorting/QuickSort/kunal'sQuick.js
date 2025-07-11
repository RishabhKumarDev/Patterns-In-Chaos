function main(){
    let arr = [4,3,5,7,2,42,5];
    console.log(quickSort(arr))
}

function quickSort(arr,low=0,high=arr.length-1){

    if(low>= high) return;

    let start = low;
    let end = high;
    let piviot = arr[Math.floor((low+high)/2)]; 

    while(start <= end ){
        while(arr[start] < piviot){
            start++;
        }
        while(arr[end] > piviot){
            end--;
        }
        if(start <= end){
        [arr[start],arr[end]] = [arr[end],arr[start]]; 
        start++;
        end--;

        }
    }

    quickSort(arr,low,end);
    quickSort(arr,start,high);
    return arr;
    
}



main();