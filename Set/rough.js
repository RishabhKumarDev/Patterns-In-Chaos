function main(){
    console.log(rough());
}

function rough(){

    let set = new Set([1,23,4]);

     set.delete(1)
     let arr = [1,2,3,4,5,6,7,8,7,4,2,1,2,2,2,2,2]
     let set2 = new Set(arr);
     
     let fruits = ['apple','banana','grapes','lithci']
     let setF = new Set(fruits);

     for( const fruit of fruits){
        console.log(fruit)
     }
     setF.forEach((el,i) => console.log(el + i))
     fruits.forEach((el,i) => console.log(el + i ))
     let  fruits2 = [...setF]

     
     return [set2,fruits2]
}
main();