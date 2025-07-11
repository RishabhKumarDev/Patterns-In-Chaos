function pattern(n){
    let result='';
    for(let i=0; i<n; i++){
        for(let j=0; j<=i; j++){
            result += '  ';
        }
        for(let k=0; k< ((2*n)-((2*i)+1)); k++){
            result += "* ";
        }
        result += '\n';
    }
    return result;
}

console.log(pattern(5));
//  * * * * * * * * * 
//   * * * * * * *     
//     * * * * * 
//      * * * 
//        * 