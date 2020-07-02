const arr = [ [10, 20, 30],
            [40, 50, 60],
            [70, -80, 90] ];

const bigArray =
[ [ 887, -541, -430, -590, 117, 172, -319, -18 ],
  [ -269, 964, 209, 840, -456, 156, 365, -568 ],
  [ 289, -41, 488, 198, 240, 124, -427, 214 ],
  [ 452, 894, 968, -149, 683, 977, 741, -805 ],
  [ 181, -714, -950, 107, 800, 751, -143, 380 ],
  [ 152, 493, 707, 914, 37, 356, -625, 608 ],
  [ -345, 906, 83, 676, 723, 381, 557, -183 ],
  [ 199, -943, -710, 565, 193, 315, 281, 245 ] ];

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

// Function to get the Max value in Array
const maxInArray = (array) => {
    let sortedArray = [...array].sort(function (a, b) {
        return b - a; //ASC a-b //DESC b-a
    })
    return sortedArray[0];
};

const greatestSum = (inputArr) => {
    const allSum = [];
    const sideLen = inputArr.length - 1;
    const transposedArr = transposeArr(inputArr);

    console.log('sideLen: ', sideLen);
    //calc the horizontal sum
    inputArr.forEach((row, idx) => {
        // console.log(sumArrElement(row));
        allSum.push(sumArrElement(row));

        //calc slash diagonal sum
        const diagArr = [];
        for (i = 0; i <= sideLen; i++) {
            if (i === idx) {
                diagArr.push(row[i]);
            }
        }
        // console.log(sumArrElement(diagArr));
        allSum.push(sumArrElement(diagArr));

        //calc backslash diagonal sum
        const diagArr2 = [];
        for (i = 0; i <= sideLen; i++) {
            if ((sideLen - i) === idx) {
                diagArr2.push(row[i]);
            }
        }
        // console.log(sumArrElement(diagArr2));
        allSum.push(sumArrElement(diagArr2));
    });

    //calc the vertical sum
    transposedArr.forEach(row => {
        // console.log(sumArrElement(row));
        allSum.push(sumArrElement(row));
    });

    //display the biggest sum
    console.log('allSum: ', allSum);
    console.log('maxSum: ', maxInArray(allSum));
}

greatestSum(arr); //180
greatestSum(bigArray); //3232