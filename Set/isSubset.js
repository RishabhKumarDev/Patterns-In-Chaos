function main(){
    let set1 = new Set([1,3,4,5,2,6,7])
    let set2 = new Set([1,2,3,4])
    console.log(isSubset(set1,set2));
}

function isSubset(set1,set2){
    let isSub = false;
    for(let el of set2){
        
        if(!set1.has(el)) return false;
        
    }
    
    return true;
}


main();