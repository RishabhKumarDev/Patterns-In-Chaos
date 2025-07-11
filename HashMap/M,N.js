function count(arr,targets){
    let result = {};

    for(let i=0; i<targets.length; i++){
        let target = targets[i];
        let count = 0;
        for(let j=0; j<arr.length; j++){
            if(target === arr[j]){
                count++;
            }
        }
        result[target] = count;
    }
    return result;
}


let arr = [1,2,3,4,1,3,1,1,1,1,1,1,1,4,5,3,4,6,5,0,3,3,4,6,7,7,5,3,3,2,2,4,5,6,6,7,1,3,3,3,4,4,6,7,7,5,4,3,3,4,5,7,7,8,9,9,9,9,7,4,3,3,2,]
let targets = [1,2,4,5,3,6,7,8,9,0]

console.log(count(arr,targets))