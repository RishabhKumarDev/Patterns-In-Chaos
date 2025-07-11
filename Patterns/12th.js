function pattern(n){
    // let space = 2 * n-1;
    let result ='';
    for(let i = 0; i<n; i++){
        for(let j=0; j<=i; j++){
            result += j+1;
        }
        for(let k =0;k< 2*(n -(i+1)); k++){// second approach (K= space;)
            result += " ";
        }
        for(let l = i; l>=0; l--){ //(it's the way you were looking at the queistion you were trying to print it from right to left but it is printing left to right means decerementing
        // ) understanding= l starts from i( 0)/ cheks if it's <=0/ result += l+1(0+1)/ l--
            result += l+1 ;
        }
        result +='\n';
        // space -= 2;
    }
    return result
}
console.log(pattern(4));
// 1      1
// 12    21
// 123  321
// 12344321