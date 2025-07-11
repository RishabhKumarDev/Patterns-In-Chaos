function pattern(n){
    let result='';
    for(let i=0; i<n; i++){
        for(let j=0; j<n-i; j++){
           result += '* ';
        }
        result +='\n'
    }
    return result
}

console.log(pattern(5));
// * * * * * 
// * * * * 
// * * * 
// * * 
// * 