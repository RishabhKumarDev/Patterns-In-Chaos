function main() {
  let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  let matrix2 = [
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16],
  ];
    console.log(rotate90(matrix));
  console.log(rotate90Better(matrix));

  //   console.log(swapWrong(matrix));
}

function rotate90(matrix) {
  let n = matrix.length;
  let res = [];

  for (let row = 0; row < n; row++) {
    let rA = [];
    for (let col = 0; col < n; col++) {
      rA.push(matrix[n - 1 - col][row]);
    }
    res.push(rA);
  }

  return res;
}

function rotate90Better(matrix) {
  let n = matrix.length;
  for (let row = 0; row < n; row++) {
    for (let col = 0 + row; col < n; col++) {
      [matrix[col][row], matrix[row][col]] = [matrix[row][col], matrix[col][row] ];
    }
  }

  for (let row = 0; row < n; row++) {
    reverse(matrix[row], 0, n-1);
  }

  return matrix;

}

function reverse(arr, start, end) {
  while (start <= end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}





// this is wrong dude i knew it while dry run....
function swapWrong(matrix) {
  let n = matrix.length;

  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      [matrix[row][col], matrix[col][n - 1 - row]] = [
        matrix[col][n - 1 - row],
        matrix[row][col],
      ];
    }
  }

  return matrix;
}

main();
