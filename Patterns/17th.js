function pattern(n){
    let result = '';
    let ch = 65;
    for(let i=0; i<n; i++){
        for(let j=0; j<n-i; j++){
            result += ' ';
        }
        for(let k=0; k<=i; k++ ){
            result += String.fromCharCode(ch);
            ch++;
        }
        ch=64+i;
        for(let l=0; l<i; l++){
            result += String.fromCharCode(ch);
            ch--
        }

        result +='\n';
        ch=65
    }
    return result;
}
console.log(pattern(4));
//    A
//   ABA
//  ABCBA
// ABCDCBA