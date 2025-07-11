function main(){
    let arr = [3,1,2];
    let n = arr.length;
    let i = 0;
    let emptyArr = [];
    fn(i,arr,n,emptyArr);
}
function fn(i,arr,n,emptyArr){
    
    if( i>= n){
        console.log(emptyArr);
        return;
    }
    emptyArr.push(arr[i]);
    fn(i+1,arr,n,emptyArr);
    emptyArr.pop();
    fn(i+1,arr,n,emptyArr);
    
}
console.log(main())
console.log(n = [3,2,1].length)