function GCD(a,b){
    let GCD =1;
    for(let i=1; i<= Math.min(a,b); i++){
        if(a%i === 0 && b%i === 0){
             GCD=i
        }
    }
    return GCD;
}

console.log(GCD(20,40))

function gcd(a,b){
    for(let i=Math.min(a,b); i>=1; i--){
        if(a%i === 0 && b%i=== 0 ){
            return i;
        }
    }
}

console.log(gcd(20,40))

// optimised euclidean algorithum..'

function euclidean(a,b){
    
    while(a>0 && b>0){
        if( a > b){
            a = a%b;
        }else {
            b = b %a;
        }
        if(a === 0 ) return b;
        if (b === 0 ) return a;

    }
}
console.log(euclidean(52,10));
