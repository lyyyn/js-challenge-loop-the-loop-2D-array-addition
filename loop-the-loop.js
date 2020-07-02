const inputArr = [ [10, 20, 30],
            [40, 50, 60],
            [70, -80, 90] ];

const sumArrElement = (inputArr) => {
        return inputArr.reduce((a, b) => a + b, 0)
}

const greatestSum = (inputArr) => {
    const allSum = [];
    const sideLen = inputArr.length;

    console.log('sideLen: ',sideLen);
    //calc the horizontal sum
    inputArr.forEach(row => {
        // console.log(sumArrElement(row));
        allSum.push(sumArrElement(row));
    });

    //calc the vertical sum
    inputArr.map(row => {
        const arrCol = [];
        
        // console.log(sumArrElement(row));
        // allSum.push(sumArrElement(row));
    });
    //calc slash diagonal sum
    //calc backslash diagonal sum
    //display the biggest sum
    console.log('allSum: ',allSum);
}         

greatestSum(inputArr); //180