function count(n){
    let ctn = 0;
    while(n>0){
        ctn = ctn +1;
        n = Math.floor(n/10);
    }
    return ctn;
}
console.log(count(7789));

function extraction(n){
      let lastDig =0;

    while(n>0){
        lastDig = n %10;
        n=Math.floor(n/10);
        console.log(lastDig)
    }
}
console.log(extraction(7789));
function count2(n){
    let ctn = Math.floor(Math.log10(n)+1);
   
    return ctn;
}
console.log(count2(7789));