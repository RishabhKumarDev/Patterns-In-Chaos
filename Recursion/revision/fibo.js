function main(){
    console.log(fibo(50));

}
function fibo(n){
    if( n <= 1 ) return n;

    return fibo(n-1) + fibo(n-2);
}
main();