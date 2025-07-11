function swap(l,r,arr){
    if(l>= r) return;
    [arr[l],arr[r]] = [arr[r],arr[l]]
    swap(l+1,r-1,arr)
}

function main(){
    let arr = [1,3,4,65,78,44,3]
    let l =0;
    let r = arr.length -1;
    swap(l,r,arr)
    return arr;
}
console.log(main())

var isPalindrome = function(s) {
     s = s.replace(/[^a-zA-Z]/g, "");
   l = 0;
   r = s.length -1;
   function check(s,l,r){
    if(s === "") return true;
       if(l>r) return true;
       if(s[l] !== s[r]) return false;
      return check(s,l+1,r-1);
   }
   return check(s,l,r);
};

console.log(isPalindrome("race a car"))