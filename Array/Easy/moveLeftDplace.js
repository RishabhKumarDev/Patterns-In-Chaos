function main(){
    let arr = [1,2,3,4,5,6,7,8];
    // console.log(leftByD(arr,11));
    console.log(optLeftByD(arr,3));
}
// Brute force ( TC= O(n), Auxilary S.C = O(n));
function leftByD(arr,d){
    let temp = [];
    d%=arr.length;

    for(let i=0; i<d; i++){
        temp[i] = arr[i];
    }
    for(let j=d; j<arr.length; j++){
        arr[j-d] = arr[j];
    }
    // here for accessing 0th index of temp we could do something like adding a j=0 outside the loop and inside after puting the values j++;
    // that's the easiest way.
    for(let k= arr.length-d; k<arr.length; k++){
        arr[k] = temp[k-(arr.length-d)]
    }
    return arr;
}

//  Optimised ( )
// reversing technique ( see notes page no. = 38);
function optLeftByD(arr,d){
    d%=arr.length;

    


    function reverse(arr,start,end){
        while(start < end){
            [arr[start],arr[end]] = [arr[end],arr[start]];
            start++;
            end--;
        }

    }

    // we have to pass the index where the first and last values are. not one after ( cuz this is not for loop ) we are swaping the values the loop is running from both ends.
    reverse(arr,0,arr.length-1); // my mistake was i was passing end = arr.length only i didn't sub -1 to it it's not a for loop it's a while loop where the end is defining the value of the last index so i have to pass by sub-1 cuz that's whre the last vlaue is.
    reverse(arr,0,(arr.length-1)-d);
    reverse(arr,arr.length-d, arr.length-1);

    return arr;
}


main();