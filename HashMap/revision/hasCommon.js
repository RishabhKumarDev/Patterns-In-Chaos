function main(){
    console.log(hasCommon2(['a', 'b', 'c'], ['x', 'y', 'z'])); // false
    console.log(hasCommon2(['a', 'b', 'c'], ['x', 'y', 'b'])); // true

}

function hasCommon(arr1,arr2){
    let map1 = new Map();
   let arr = arr1.concat(arr2)

    for(let char of arr){
        map1.set(char,(map1.get(char) || 0) + 1);
    }

    for(const [key,value] of map1){
        if(value > 1 ) return [key,true];
    }

    return false;
    
}
// better version 
function hasCommon2(arr1,arr2){
    let map = new Map();

    for(let el of arr1){
        map.set(el,true);
    }

    for(let el of arr2){
        if ( map.has(el)) return true
    }
    return false;
}

main();