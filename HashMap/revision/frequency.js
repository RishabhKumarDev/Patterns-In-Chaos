function main(){
    const nums = [1, 2, 2, 3, 1, 4, 2];
    console.log(frequency(nums));
}

function frequency(nums){
    let map = new Map();

    for(let el of nums){
        map.set(el, (map.get(el)|| 0) + 1);
    }

    return map;
}





main();

