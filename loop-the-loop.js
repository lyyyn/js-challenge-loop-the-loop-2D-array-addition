const inputArr = [ [10, 20, 30],
            [40, 50, 60],
            [70, -80, 90] ];

const sumArrElement = (inputArr) => {
        return inputArr.reduce((a, b) => a + b, 0)
}

const transposeArr = (matrix) => {
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < i; j++) {
          const temp = matrix[i][j];
          matrix[i][j] = matrix[j][i];
          matrix[j][i] = temp;
        }
      }
      return matrix;
}

const greatestSum = (inputArr) => {
    const allSum = [];
    const sideLen = inputArr.length;
    const transposedArr = transposeArr(inputArr);

    console.log('sideLen: ',sideLen);
    //calc the horizontal sum
    inputArr.forEach(row => {
        // console.log(sumArrElement(row));
        allSum.push(sumArrElement(row));
    });

    //calc the vertical sum
    transposedArr.forEach(row => {
        // console.log(sumArrElement(row));
        allSum.push(sumArrElement(row));
    });
    //calc slash diagonal sum
    //calc backslash diagonal sum
    //display the biggest sum
    console.log('allSum: ',allSum);
}         

greatestSum(inputArr); //180

console.log(transposeArr(inputArr));