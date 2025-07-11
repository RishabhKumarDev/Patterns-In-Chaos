function main() {
  let arr1 = [1, 2, 3, 4, 5, 5, 5, 6, 6, 7];
  let arr2 = [1, 3, 4, 5, 66, 7, 9, 7];
  console.log(arrayIntersection(arr1, arr2));
}

function arrayIntersection(arr1, arr2) {
  let set = new Set();
  let set2 = new Set();
  arr1.forEach((element) => {
    set.add(element);
  });
  arr2.forEach((el) => set2.add(el));
  let res = [];
  for (let el of set) {
    if (set2.has(el)) res.push(el);
  }

  return res;
}

main();
