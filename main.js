const reader=require("readline-sync")
const matrixUtil=require("./MatrixUtil")


// 1st problem
console.log(matrixUtil.matrixProduct(matrixUtil.insertMatrixFromUser(),matrixUtil.insertMatrixFromUser()));

//2nd problem
console.log(matrixUtil.sumOfMatrices(matrixUtil.insertMatrixFromUser(),matrixUtil.insertMatrixFromUser()));

//3rd problem
console.log(matrixUtil.sumOfEachRow(matrixUtil.insertMatrixFromUser()));