function main(){
   console.log( reverseStr("asdfjkl;")) ;

}

function reverseStr(str){
   if(str.length < 1 ) return "";

   let lastStr = str[str.length-1];

   return lastStr + reverseStr(str.slice(0,-1));
    
   
}




main();