function armstrong(x) {
  let ori = x;
  let sum = 0;
  let lnt = x.toString().length;
  while (x > 0) {
    let ld = x % 10;

    sum += Math.pow(ld, lnt);
    x = Math.floor(x / 10);
  }
  return ori === sum;
}
console.log(armstrong(153));


function armstrong2(x) {
  let ori = x;
  let sum = 0;
  let lnt = x.toString().length;
  while (x > 0) {
    let ld = x % 10;
    let pow = 1;
    for (i = 0; i < lnt; i++) {
      pow *= ld;
    }
    sum += pow;
    x = Math.floor(x / 10);
  }
  return ori === sum;
}
console.log(armstrong2(153));
