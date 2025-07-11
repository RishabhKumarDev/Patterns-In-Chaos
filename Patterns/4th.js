function pattern(n){
    let result ='';
    for(let i=0; i<n; i++){
        for(let j=0; j<=i; j++){
            result += i+1 +" " ;
        }
        result +='\n';
    }
    return result;
}
console.log(pattern(5))
//1
//2 2 
//3 3 3
//4 4 4 4
//5 5 5 5 5