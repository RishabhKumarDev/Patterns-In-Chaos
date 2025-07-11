function main(){
    let words = ["bat", "tab", "eat", "tea", "tan", "nat"];

    console.log(anagrams2(words));
}

function anagrams2(words){
    let map = new Map();

    for(let word of words){
        let sorted = word.split("").sort().join("");

        if(map.has(sorted)){
            map.get(sorted).push(word);
        }else{
            map.set(sorted,[word]);
        }
    }

    return Array.from(map.values());
}


























function anagrams(words){

    let map = new Map();

    for(let word of words){
        let sorted = word.split("").sort().join("");

        if(map.has(sorted)){
            map.get(sorted).push(word);
        }else{
            map.set(sorted,[word]);
        }
    }

    return Array.from(map.values())

    
}



main();