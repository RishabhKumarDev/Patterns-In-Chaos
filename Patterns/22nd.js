function pattern(n){
    let result ='';
    let num =Math.ceil(n/2);
    for (let i=0;i<n; i++){
        for (let j=0; j<n; j++){
            if( i=== 0 || j === 0 || i=== n-1 || j=== n-1){
                result += num;
            }else{
                result +=' ';
            }

        }
        result += '\n';

    }
    return result;
}
console.log(pattern(7));
//  couldn't do this