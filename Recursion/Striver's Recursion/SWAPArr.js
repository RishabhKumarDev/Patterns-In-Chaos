let nums = [1,2,3,4,5,6,7,8,9]

function swap(arr){
    let left = 0;
    let right = arr.length -1 ;

    while (left < right){
        [arr[left],arr[right]] = [arr[right],arr[left]];
        left++;
        right--;
    }
    return arr;
}

console.log(swap(nums))