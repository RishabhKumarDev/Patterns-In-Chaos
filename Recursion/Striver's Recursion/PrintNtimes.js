let count =0;
function print1(){
    console.log("one 1")
    print();
    
}
function print(){
    if(count === 4) return;
    console.log(count)
    count++;
    print1();
    console.log("hi")
}

function start(){
    print()

}
start()