function main(){
    console.log(sumOfN(399));
}

function sumOfN(n){
    if(n <= 1 ) return n;

    return n + sumOfN(n-1);
}



main();