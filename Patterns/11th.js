function pattern(n){
    let start = 1;
    let result ='';
    
    for(let i= 0; i<n; i++){
        start = (i % 2 === 0) ? 1 : 0;
        for(let j =0; j<=i; j++){
            result += start + ' ';  
            start = 1 - start ;
        }
        result +='\n';
    }
    return result;
}

console.log(pattern(5))
// 1
// 0 1
// 1 0 1
// 0 1 0 1
// 1 0 1 0 1