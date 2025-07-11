function pattern(n){
    let result='';
    let ch = 65;
    for(let i=0; i<n; i++){
        for(let j=0; j<n-i; j++){
            result += String.fromCharCode(ch);
            ch++;
        }
        ch = 65
        result += '\n';
    }
    return result;
}
console.log(pattern(5));
// ABCDE
// ABCD
// ABC
// AB
// A

