
function primeCheck3(x){
    let count=0;
    for(let i=1; i<=x; i++){
       if(x%i=== 0){
         count++
         if( count > 2){
            return false;
         }
       }
    }
   return true ;
}

console.log(primeCheck3(11))

function primeCheck(x){
    let count=0;
    for(let i=1; i<=x; i++){
       if(x%i=== 0){
         count++
       }
    }
   return count ===2 ? true: false  ;
}

console.log(primeCheck(12))
function prime2(x){
    if(x<2) return false;
    for(let i = 2; i<x; i++){
        if(x %i === 0 ) return false;
    }
    return true;
}
console.log(prime2(2))

// optimized code--------chat gpt----------------
 function primeoptimized(x){
    if(x<2) return false;
    if(x === 2) return true;
    if(x % 2 === 0 ) return false;

    for(let i =3; i*i <= x; i+=2){
        if( x % i === 0 ) return false;
    }
    return true;
 }
 console.log(primeoptimized(111));

 //strivers way
 function primeStriver(n){
    let count =0;
    for(let i=1; i*i <=n; i++){
        console.log(i*i, Math.sqrt(n))
        if(n %i === 0){
            count ++
            if(n/i !== i ){
                count ++;
            }
        }
    }
    return count === 2? true : false;
 }
console.log(primeStriver(36))
