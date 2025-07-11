function main() {
  let arr = [1, 2, 3, 4, 5, 6, 7, 3, 3];
  console.log(duplicates(arr));
}

function duplicates(arr) {
  let set = new Set();

  for (let el of arr) {
    if (set.has(el)) {
      return true;
    } else {
      set.add(el);
    }
  }
  return false;
}

main();
