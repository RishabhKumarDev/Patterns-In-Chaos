function count(n){
    let count = 0;
    let original = n;
    while(n>0){
    let digit = n%10;
      
        if( digit !== 0 && original % digit === 0){
            count++;
        }
        n= Math.floor(n/10);
    }
    return count
}
console.log(count(12));
