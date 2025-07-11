function pattern(n){
    let result = '';
    for(let i=0; i<=n; i++){
        for(let j=0; j<n-i; j++){
            result += '  ';
        }
        for(let k = 0; k< (2*i)-1; k++){
             result += "* "
        }
        result +='\n';

    }
    for(let l=0; l<n; l++){
           
        for(let m=0; m<l; m++){
            result += "  ";
        }
        for(let o = 0; o < ((n+n)-((2*l)+1)) ; o++){
            result +='* ';
        }
        result +='\n';
    }
    return result;
}
console.log(pattern(5));


//         *
//       * * * 
//     * * * * *
//   * * * * * * *
// * * * * * * * * *
// * * * * * * * * * 
//   * * * * * * * 
//     * * * * * 
//       * * * 
//         * 