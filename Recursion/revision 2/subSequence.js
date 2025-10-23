let arr = [3, 2, 1];
let n = arr.length;
function main() {
  subSeq(0, []);
}

function subSeq(i, res = []) {
  if (i >= n) {
    console.log(res);
    return;
  }

  res.push(arr[i]);
  subSeq(i + 1, res);
  res.pop();
  subSeq(i + 1, res);
}

main();
