function pattern(n){
    let result ='';
    let ch = 65;
    // let A = String.fromCharCode(ch);
    
    for(let i=0; i<n; i++){
        for( let j=0 ; j<=i; j++){
            result += String.fromCharCode(ch);
            
        }
        ch++
        result += '\n';
    }
    return result;

}
console.log(pattern(5));
// A
// BB
// CCC
// DDDD
// EEEEE
