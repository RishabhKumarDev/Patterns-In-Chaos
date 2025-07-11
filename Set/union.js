function main(){
    let a1= [1,2,3,4,5,4,5,6,7,7,7,8,8,9,10]
    let a2= [1,2,3,4,5,5,4,1,2,6,7,8,9,0]
    console.log(symetricDiff(a1,a2));

}

function symetricDiff(a1,a2){

    let set1 = new Set();
    let set2 = new Set();

    a1.forEach(el => set1.add(el))
    a2.forEach(el => set2.add(el))

    let res = [];
    for(let el of set1){
        if(!set2.has(el)) res.push(el);

    }
    for(let el of set2){
        if(!set1.has(el)) res.push(el);
    }

    return res;

}


main();