function main(){
  console.log(factorial(4));
}

function factorial(n){
    if(n <= 1) return 1;

    return n * factorial(n-1);
}

main();