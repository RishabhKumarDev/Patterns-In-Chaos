function divisior(x){
    let nums= [];
   for(let i=1; i<=x; i++){
       x % i === 0? nums.push(i): nums;
   }

    return nums;
}
console.log(divisior(36));

function divisior2(x){
    let nums = [];
    for(let i=1;i*i<= x ; i++){ //i<= Math.sqrt(x) 2 ways to write this
        if(x%i===0){
            nums.push(i);
            if( x /i !== i) nums.push(x/i);
        } 
           
    }
    return nums.sort((a,b)=> a-b );
}
console.log(divisior2(36));
