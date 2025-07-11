function main(){
    console.log( sumOfDig(123));

}

function sumOfDig(n){

    if(n <= 0 ) return 0;

    return n % 10 + sumOfDig(Math.floor(n/10));

}

main();