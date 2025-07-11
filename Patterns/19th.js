function pattern(n){
    let result = '';
    let half = Math.floor(n/2) 
    
    for(let i=0; i<half; i++){
        
        for(let j=0; j<half-i; j++){
            result += '*';
        }
        for(let k=0; k< 2*i; k++){
            result += ' ';
        }
        for(let l=0; l<half-i; l++){
            result += '*';
        }
        result +='\n';
    }
    for(let i=0; i<half;i++){
        for(let j=0; j<=i; j++){
            result += "*";
        }
        for(let k=0; k< n-2*(i+1); k++){
            result += ' ';
        }
        for(let l=0; l<=i; l++){
            result += '*';
        }
        result +='\n'; 
    }
    return result;
}
console.log(pattern(16));
// **********
// ****  ****
// ***    ***
// **      **
// *        *
// *        *
// **      **
// ***    ***
// ****  ****
// **********