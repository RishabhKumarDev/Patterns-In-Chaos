function printNtimes(i, n) {
  if (i > n) return;
  printNtimes(i + 1, n);
  console.log(i)
}

(() => {
  return printNtimes(1, 7);
})();
