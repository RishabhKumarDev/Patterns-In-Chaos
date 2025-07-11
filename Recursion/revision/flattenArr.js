function main(){
    let arr = ['h', ['e', ['l', 'l'], 'o']]

    console.log(flattenArr(arr));
}

function flattenArr(arr){

    let res = [];
    for (const el of arr) {
        if( Array.isArray(el) ){
           res =  res.concat(flattenArr(el));
        } else{
            res.push(el)
        }

    }
    return res;
}



main();