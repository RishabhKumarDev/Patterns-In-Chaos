// function main(){
//     let arr = ["apple", "banana", "apricot", "blueberry"];
//     console.log(groupByFirst(arr));
// }
function main() {
    let arr = [
        "apple", "apricot", "avocado", "banana", "blueberry", "blackberry", "boysenberry", "cherry", "clementine", "cranberry",
        "date", "dragonfruit", "durian", "elderberry", "fig", "gooseberry", "grape", "grapefruit", "guava", "honeydew",
        "jackfruit", "jambul", "jujube", "kiwi", "kumquat", "lemon", "lime", "lychee", "mango", "melon",
        "mulberry", "nectarine", "orange", "olive", "papaya", "peach", "pear", "persimmon", "pineapple", "plum",
        "pomegranate", "quince", "raspberry", "redcurrant", "rhubarb", "salak", "satsuma", "starfruit", "strawberry", "tamarind",
        "tangerine", "tomato", "ugli", "watermelon", "yuzu", "zucchini", "ziziphus", "apex", "anchor", "armor",
        "bolt", "beam", "blaze", "cannon", "core", "circuit", "dock", "drift", "engine", "eagle",
        "falcon", "fuse", "flare", "gear", "grip", "hatch", "ion", "ignite", "javelin", "keel",
        "launch", "lift", "loop", "motor", "module", "node", "nozzle", "orb", "panel", "pod",
        "quantum", "rivet", "rocket", "solar", "shield", "turret", "thruster", "valve", "vent", "weld",
        "wing", "xenon", "yacht", "zip", "zealot", "zone", "zero", "zenith", "zebra", "zodiac"
    ];

    console.log(groupByFirst(arr));
}


function groupByFirst(arr){
    let map = new Map();

    for(let word of arr){
        let firstLtr = word[0];
        
        if( map.has(firstLtr)){
            map.get(firstLtr).push(word);
        }else{
            map.set(firstLtr,[word])
        }
    }

    return map;

}

main();