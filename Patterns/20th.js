
function pattern(n){
    let result='';
    let mid = Math.ceil(n/2);

    for(let i = 0; i<n; i++){
    let space = 2*(mid - i -1);
    let stars = i;
       if(i>=mid){
        stars = n-i - 1;
        space = 2*(i - mid +1)
       }
        for(let j=0; j<=stars; j++){
               result += "*";
        }
        for(let k=0; k<space; k++){
            result += ' ';
        }
        for(let l=0; l<=stars; l++){
            result +="*";
        }
        result +='\n';
    }
    return result;
}
console.log(pattern(9));
