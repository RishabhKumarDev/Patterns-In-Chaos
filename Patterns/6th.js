function pattern(n){
    let result ='';
    for(let i=0; i<n; i++){
        for(let j=0; j<n -i; j++){
            result += j + 1 + " ";
        }
        result += '\n';
    }
    return result;
}
console.log(pattern(5))

// 1 2 3 4 5 
// 1 2 3 4 
// 1 2 3 
// 1 2 
// 1 
