// factoial := n =4  , factorial = 1*2*3*4 = 24;
// i.e = n* fn(n-1); in every function call the n will be n-1 and it will multipy with next fn result n-1;
// functional way.......     
function factoialN(n){
     if(n <= 1 ) return 1;
     return n * factoialN(n - 1)
}




function main(){
    let n = 5;
   let result =  factoialN(n);
    console.log(`factorial of ${n} is ${result}`)
}
main();

// paramaterised way...
function factorialN(n,facto){
    if(n<=1 ){
     console.log(facto);
     return;
    }
    factorialN(n-1,facto*n)
}
factorialN(5,1)