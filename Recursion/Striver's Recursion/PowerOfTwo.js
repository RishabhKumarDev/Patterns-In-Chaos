var isPowerOfTwo = function(n) {
    if(n == 1) return true;
    if(n < 1 ) return false;
    if(n % 2 !== 0) return false;
    return isPowerOfTwo(n/2);
};

console.log(isPowerOfTwo(1))
console.log(isPowerOfTwo(2))
console.log(isPowerOfTwo(3))
console.log(isPowerOfTwo(41))
console.log(isPowerOfTwo(16))
