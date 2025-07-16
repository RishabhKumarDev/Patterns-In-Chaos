// Print the nth row of the pascal's triangle;

function main() {
  let n = 3;

  console.log(brute(n));
  console.log(better(n));
}
function ntElement(n, r) {
  let facto = 1;
  for (let i = 0; i < r; i++) {
    // run till r times; if r is 1 then loop will run 1 times 0 < 1 = 1 time and so on for other values, but initial value i.e for 0th it have result initial value.
    facto *= n - i;
    facto /= i + 1;
  }
  return facto;
}
function brute(n) {
  let res = [];

  for (let i = 0; i <= n; i++) {
    let el = ntElement(n, i);
    res.push(el);
  }

  return res;
}

function better(n) { // 3 0 to <3 = 3times + initial value of facto at 0 place = 4 times.
  let facto = 1;
  let res = [];
  res.push(facto);
  for (let i = 0; i < n; i++) {
    facto *= n - i; 
    facto /= i + 1;
    res.push(facto);
  }
  return res;
}
main();
