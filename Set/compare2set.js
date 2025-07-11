function main() {
  let set1 = new Set([1, 2, 3]);
  let set2 = new Set([3, 2, 1]);
  console.log(compare(set1, set2));
}

function compare(set1, set2) {
  if (set1.size !== set2.size) return false;
  for(let el of set1){
    if(!set2.has(el)) return false;
  }

  return true;

}

main();
            