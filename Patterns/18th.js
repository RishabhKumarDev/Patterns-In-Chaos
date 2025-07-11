function pattern(n){
    let result ='';
    ch = 64;
    for(let i = 0; i<n; i++){
        ch = 64 + n -i;
        for(let j=0; j<=i; j++){
            result += String.fromCharCode(ch);
            ch++
        }
        result +='\n';
    }
    return result;
}
console.log(pattern(5));

