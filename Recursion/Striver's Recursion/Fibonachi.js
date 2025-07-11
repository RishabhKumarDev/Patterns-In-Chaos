function fiboArr(n){
    let f = [];
    f[0] =0;
    f[1] =1;
    for(i=2; i<=n; i++){
        f[i] = f[i-1] + f[i-2]
        
    }
    return f[n];
}
console.log(fiboArr(6));

function fiboRecu(n){
    if(n<=1) return n;
    return fiboRecu(n-1) + fiboRecu(n-2);

}

console.log(fiboRecu(6))