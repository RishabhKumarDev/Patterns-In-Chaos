function main(){
    console.log(palidrome("hsih"));
}

function palidrome(str){

str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
if(str.length <= 1 ) return true;
if(str[0] !== str[str.length-1]) return false;
return palidrome(str.slice(1,-1))

}

main();