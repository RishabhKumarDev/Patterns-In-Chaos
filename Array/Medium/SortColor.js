function main(){
    let nums = [2,1,0,0,2,1];

    
    console.log(sortcolor(nums));

}

function sortcolor(arr){
    let i = 0;
    let start = 0;
    let end = arr.length-1;

    while( i <= end){
        if(arr[i]===1) i++;

        if(arr[i] === 0){
            [arr[i],arr[start]] = [arr[start],arr[i]];
            start++;
            i++
        }
        if(arr[i]===2){
            [arr[i],arr[end]] = [arr[end],arr[i]];
            end--;
            i++

        }

    }

    return arr;
}

main();