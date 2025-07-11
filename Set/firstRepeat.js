function main(){
    let arr = [1,2,3,4,5,6,6,7]
    console.log(repeat(arr));
}

function repeat(arr){
    let set = new Set();

    for(let el of arr){
        if(set.has(el)){
            return el;
        }else{
            set.add(el);
        }
    }

    return null;
}


main();