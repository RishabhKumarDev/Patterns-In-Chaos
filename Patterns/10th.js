function pattern(n){
    let result ='';
    for(let i=0; i<n; i++){
        for(let j=0; j<=i; j++){
            result +="* ";
        }
        result +='\n';
    }
    for(let k=0; k< n-1; k++){
        for(let l=0; l< (n-(k+1)); l++){
            result += "* ";
        }
        result +='\n';
    }
    return result;
}
console.log(pattern(9));
function pattern2(n){
    let result ='';
    for(let i=0; i<2*n-1; i++){
        let stars = i;
        if(i>=n) stars = 2*n - i-2;
        
        for(let j=0; j<=stars; j++){
            result +="* ";
        }
      result +='\n';
    }
    return result;
}
console.log(pattern2(5));
function pattern3(n){
    let result ='';
    for(let i=0; i<2*n-1; i++){
        let stars = i;
        if(i>=n) stars = 2*n - i-2;
        
        for(let j=0; j<=stars; j++){
            result += stars+1;
        }
      result +='\n';
    }
    return result;
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
console.log(pattern3(5));
// *
// * *
// * * *
// * * * *
// * * * * *
// * * * *
// * * *
// * * 
// *