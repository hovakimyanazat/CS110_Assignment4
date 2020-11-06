const reader= require("readline-sync")
module.exports={matrixProduct,insertMatrixFromUser,sumOfMatrices,sumOfEachRow}


//function to insert Matrices
function insertMatrixFromUser() {
    console.log("Hello user! We want to ask you to insert a matrix for us!");
    const rows = reader.questionInt("How many rows does your matrix Have? Rows = ");
    const cols = reader.questionInt("How many cols does your matrix Have? Cols = ");
    console.log(`Rows = ${rows}`);
    console.log(`Cols = ${cols}`);
    const matrix = [];
    for(let rowIndex = 0; rowIndex < rows; rowIndex++) {
        const row = [];
        for(let colIndex = 0; colIndex < cols; colIndex++) {
            row.push(reader.question(`Please insert value for [${rowIndex}][${colIndex}] = `));
        }
        matrix.push(row);
    }
    return matrix;
}


//function for 1st problem
function matrixProduct(mat1=[], mat2=[]) {
    let productStr=""
    for ( let i=0; i < mat1.length; i++){
        for (let j=0; j < mat1[0].length; j++){
            let sum=0
            for ( let c=0; c < mat2[0].length; c++){
              sum+= mat1[i][c] * mat2[c][j]
            }
            productStr+=sum+ " "
        }
        productStr+= "\n"
    }
    return productStr     
}


//function for 2nd problem
function sumOfMatrices(mat1=[], mat2=[]) {
    let sum=0
    let productStr=""
    for ( let i=0; i < mat1.length; i++){
        for (let j=0; j < mat1[0].length; j++){
            sum= mat1[i][j] + mat2[i][j]
            productStr+=sum+ " "
        }
        productStr+= "\n"  
    }
    return productStr     
}


// function for 3rd problem
function sumOfEachRow(mat=[]) {
    const result=[]
    for ( let i=0; i < mat.length; i++) {
        let sum=0
        for ( let j=0; j<mat[i].length; j++){
            sum+=mat[i][j]
            
        }
        result.push(sum)
    }
return result
}












