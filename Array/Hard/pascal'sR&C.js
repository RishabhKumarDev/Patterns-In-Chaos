// given Row and Col.
// find the element at that place in pascal's triangle.

function main() {
  let row = 6;
  let col = 4;
  console.log(findRandC(row - 1, col - 1));
  console.log(better(row-1, col-1))
}

function findRandC(n, r) {
  let nFact = 1;

  for (let i = n; i > 1; i--) {
    nFact *= i;
  }

  let rFact = 1;

  for (let i = r; i > 1; i--) {
    rFact *= i;
  }

  let nSubR = n - r;
  let nrFact = 1;

  for (let i = nSubR; i > 1; i--) {
    nrFact *= i;
  }

  return (res = nFact / (rFact * nrFact));
}



// better

function better(n,r){
    let res = 1;

    for(let i=0; i < r; i++){  // the loop runs from n to r times,
        res *= n-i; // each step we multiply n-i that gives us the factorial of n till r, eg: 5-0, 1, 2, 3, 4, 5 and so on... 
        res /= i+1; // after putting the val of n we instantly divide it with reverse of r! as divide any time the end result will be same and reverse sequence is eaiser to divide with.

    }

    return res;

  
}

main();
