let count = 0;

function printName(n){
    if(count===n) return;
    count++;
    console.log("rishabh",count);
    printName(n);
}

printName(5)

function ParaPrint(i,n){
    if(i>n) return;
    console.log('stupid', i);
    ParaPrint(i+1,n);
}

ParaPrint(1,5)

function printtoN(i,n){
     if(i>n) return;
     console.log(i)
     printtoN(i+1,n)
}
printtoN(1,5)

function PrintNto(i,n){
    if(i>n) return;
    console.log(" backward ",n);
    PrintNto(i,n-1);
}
PrintNto(1,5)

function printBacktrack(i,n){
    if(i<1) return;
    printBacktrack(i-1,n);
    console.log("backtrack",i);
}
function printBacktrackreverce(i,n){
    if(i>n) return;
    printBacktrackreverce(i+1,n);
    console.log("add",i)
}

function main(n){

    printBacktrack(n,n);
    printBacktrackreverce(1,n)
}
main(5)