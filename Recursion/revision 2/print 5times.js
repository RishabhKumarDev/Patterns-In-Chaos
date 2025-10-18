function printName(n) {
  if (n > 5) return;
  console.log("name", n);
  printName(n + 1);
}

(() => {
  return printName(1);
})();
