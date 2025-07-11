let arr = [1, 2, 1, 3];

function count(arr){

    let map = new Map();

    for( num of arr ){
        if(map.has(num)){
            map.set(num,map.get(num)+1);
        }else{
            map.set(num,1)
        }
    }
    return map
}

console.log(count(arr))