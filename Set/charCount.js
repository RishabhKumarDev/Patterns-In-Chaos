function main(){
    let str = "aurKyaHalChal";
    console.log(countChar(str));
}

function countChar(str){
    return new Set(str).size;
}

main();