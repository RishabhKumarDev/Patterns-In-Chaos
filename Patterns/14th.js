function pattern(n){
    let result = '';
    for (let i=0; i<n; i++){
        for(let  ch = 65; ch <= 65 + i ; ch++){
            result += String.fromCharCode(ch) + ' ';
            
        }
        result += '\n';
    }
    return result;
}
console.log(pattern(5));
// A
// A B
// A B C 
// A B C D
// A B C D E 