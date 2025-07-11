let result = 0;
let i = 1;
function sumN(n){
if(result >=  n*(n+1)/2){
    console.log(result);
    return;
} 
   result+= i;
   i++
   sumN(n);

}

function paramSumN(i,sum){
    if(i<1){
        console.log(sum)
        return;
    }
    paramSumN(i-1,sum+i);
}

function functionalSumN(n){
    if(n === 0) return 0;                 
    return n + functionalSumN(n-1); // 3 + fn(n-1)=>/ fn(2) = 2 + fn(n-1) =>/ fn(1)= 1 + fn(n-1)=>/ fn(0) = if (n===0) return...
}                                  // 3+3           / 2+1                   /1+0                  / 0


console.log(functionalSumN(13));
sumN(13)
paramSumN(13,0)

