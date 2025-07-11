let countMap = new Map();
countMap.set(1, 2);
countMap.set(2, 5);
countMap.set(3, 5);
countMap.set(4, 3);


function max(map){
    let max = 0;
    let ansKey = Infinity;
    for(let [key,value] of map ){
        if(value > max){
            max = value;
            ansKey = key;
        }else if(value === max){
            if(key < ansKey){
                ansKey = key;
            }
        }
    }
    return ansKey;
}

console.log(max(countMap)) 