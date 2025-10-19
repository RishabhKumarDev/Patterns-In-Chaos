function reverse(arr) {
  let l = 0;
  let r = arr.length - 1;

  return reverseH(arr, l, r);
}

let reverseH = (arr, l, r) => {
  if (l >= r) return arr;
  [arr[l], arr[r]] = [arr[r], arr[l]];

  return reverseH(arr, ++l, --r);
};

(() => {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log(reverse(arr));
})();
