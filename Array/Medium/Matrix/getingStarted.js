// Matrix -> it's nothing more than arrs inside of an array that have have elements.
// so at main array indexs you can access the arrays
// and inside of those array indexes you can access elements
// this can futher be nested like arrays inside arrays inside arrays (3D array). and further more.


function main(){
    let matrix = [[1,2,3],[4,5,6],[7,8,9]];

    // modifying the arr elements
    matrix[0][2] = "changed"
    matrix[1][1] = "changed2"
    matrix[2][1] = "changed3"

    // adding new row/ an array of elements
    matrix.push([0,0,0])


    // pushing a new element inside of the inner array
    matrix[0].push("pushed")



    // matrix itself
    console.log( matrix)

    // accessin the matrix elements
    console.log(matrix[0][0])
    console.log(matrix[0][1])
    console.log(matrix[0][2])

    console.log(matrix[1][0])
    console.log(matrix[1][1])
    console.log(matrix[1][2])

    console.log(matrix[2][0])
    console.log(matrix[2][1])
    console.log(matrix[2][2])


   

    // loop
    loop(matrix)
 
    // loop and add element at each row/inner array;
    console.log(addElinRow(matrix));
}

// lopping throught the matrix

function loop(matrix){
    
    for(let i=0; i<matrix.length; i++){
        for(let j=0; j<matrix[i].length; j++){
            console.log(matrix[i][j], "----")
        }
    }
}

// adding new element to each row/inner array

function addElinRow(matrix){

    for(let i=0; i<matrix.length; i++){
        matrix[i].push(100 + i,"\n");
    }

    return (" added new elements in the row " + matrix);
}



main();