function pattern(n){
    let count = 1;
    let result = '';
    for(let i=0; i<n; i++){
        for(let j=0 ; j<=i; j++){
            result += count++ + ' ';
        }
        result += '\n';
    }
 return result;
}

console.log(pattern(5));
// 1 
// 2 3 
// 4 5 6 
// 7 8 9 10 
// 11 12 13 14 15 