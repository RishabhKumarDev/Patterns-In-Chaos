function main(){
    const str = "aabbcdeff";

    console.log(firstNonRep(str));

}

function firstNonRep(str){
    let map = new Map();

    for(let char of str){
        map.set(char,(map.get(char) || 0) + 1);

    }

    for(const [key,value] of map.entries()){
       
        if(value === 1 ) return key;
    }

    return null;

}


main();