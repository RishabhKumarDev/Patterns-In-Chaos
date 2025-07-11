
function squarePattern(n){
    let result = '';

    for (let i = 0; i < n; i++) {
    
        for(let j=0; j< n; j++){
            result += '* ';
        }
       result += '\n';
    }
    return result;
}


console.log(squarePattern(11))

// function squarePattern2(n){
//     for(let i=0; i< n; i++){
//         console.log('*'.repeat(n))
//     }
// }
// console.log(squarePattern2(3));