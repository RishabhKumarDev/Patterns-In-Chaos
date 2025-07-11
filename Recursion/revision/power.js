function main(){
    console.log(power(2,3));
}

function power(n,m){
    if(m < 1 ) return 1;

   return n *  power(n,m-1);
    

}

main();