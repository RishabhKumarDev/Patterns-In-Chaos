var reverse = function(x) {
    let rev = 0;
    while (x>0){
        let lastDigit = x%10;
        rev = (rev*10) + lastDigit;

        x = Math.floor(x/10);

        
    }
    return rev;
};
// console.log(reverse(45667899));


var isPalindrome = function(x) {
    let rev = 0;
    let realVal = x;
    while(x>0){
       
        let lD = x%10;
        rev = (rev * 10)+ lD;
         x = Math.floor(x/10);

    }
    if(realVal == rev ){
      return  true
    }else {
       return false
    }
};
console.log(isPalindrome(10));
