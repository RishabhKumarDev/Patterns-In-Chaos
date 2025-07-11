function main() {
  console.log(isAnagram("listen", "tensil"));
}

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let map = new Map();

  let sortedStr1 = str1.split("").sort().join("");
  let sortedStr2 = str2.split("").sort().join("");

//   if (sortedStr1 === sortedStr2) return true;

  map.set(sortedStr1, str1);
  if (map.has(sortedStr2)) return true;

  return false;
}

main();
