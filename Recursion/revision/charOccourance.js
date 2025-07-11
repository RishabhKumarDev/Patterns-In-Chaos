function main(){
    console.log(countOccourance("banana","a"));
    console.log(countOccourance2("banana","a"));

}

function countOccourance(str,char,i= 0,cnt = 0){

    if(i >= str.length ) return cnt;
    
    return countOccourance(str,char,i+1,cnt+(str[i] === char ? 1 : 0))
    
    // if(str[i] === char ){
    //     cnt++;
    //    return countOccourance(str,char,i+1,cnt);
    // }else{
    //    return countOccourance(str,char,i+1,cnt);
    // }
}
function countOccourance2(str,char,i=0){
    if(i>= str.length) return 0;

    return (str[i] === char ? 1 : 0) + countOccourance2(str,char,i+1)
}

main();