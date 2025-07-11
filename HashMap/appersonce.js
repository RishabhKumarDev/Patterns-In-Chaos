let arr = [4, 5, 4, 6, 7, 5]

function once(arr){
    let map = new Map();

    for(let a of arr){
        if(map.has(a)){
            map.set(a,map.get(a)+1)
        }else{
            map.set(a,1)
        }
    }

    let min = Infinity;
    let ansKey ;
    for(let [key,value] of map){
        if(value < min){
            min = value;
            ansKey = key;
        }else if(min === value){
            if(key < ansKey){
                ansKey = key;
            }
        }
    }
    return ansKey;
}
console.log(once(arr))