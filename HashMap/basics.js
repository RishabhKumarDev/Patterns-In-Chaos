// Frequency Counter


// Given an array of numbers, return an object (or Map) with the frequency of each number.

// Example: input: [1, 2, 2, 3, 3, 3] → output: Map {1 => 1, 2 => 2, 3 => 3}
let arr = [1, 2, 2, 3, 3, 3];

function count(arr){

    let map = new Map();
    for(let el of arr){
        if(map.has(el)){
            map.set(el,map.get(el)+1)
        }else{
            map.set(el,1)
        }
    }
    return map;
}

console.log(count(arr));

//    =======================First Non-Repeating Character

// Given a string, return the first character that doesn’t repeat. If none, return null.
// Example: input: "aabbcde" → output: "c"

let str = "aabbcde";

function firstChar(str){
    let map = new Map();

    for(let char of str){

        if(map.has(char)){
            map.set(char,map.get(char)+1)
        }else{
            map.set(char,1);
        }
        
    }

    for(let [key,value] of map){
        if(value === 1){
            return key;
        }
    }
}

console.log(firstChar(str));

// ++++++++++++++++++ Are Anagrams

// Given two strings, check if they are anagrams using a Map.
// Example: "listen" and "silent" → true

let str1 = "listen";
let str2 = "silent";

function isAnagrams(str1,str2){


    if (str1.length !== str2.length) return false;
    let map1 = new Map();

    for(let ch of str1){

        map1.set(ch,(map1.get(ch) || 0) + 1)
    }

    let map2 = new Map();
    
    for(let ch of str2){
         
        map2.set(ch,(map2.get(ch) || 0 ) + 1)
    }
    
    for(let ch of map1.keys()){


        if(map1.get(ch) !== map2.get(ch) ) return false;

        
    }
    return true;
}

console.log(isAnagrams(str1,str2))

function isAnagrams2(str1,str2){
    if(str1.length !== str2.length ) return false;

    let map = new Map();

    for (let ch of str1){
        map.set(ch,(map.get(ch) || 0) +1);
        
    }

    for(let ch of str2){
        if(!map.get(ch)) return false;

        map.set(ch,map.get(ch) -1)

        if(map.get(ch) < 0) return false;
    }

    return true;
}

console.log(isAnagrams(str1,str2))