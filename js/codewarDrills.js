// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
//
//     For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
//
// Note: The function accepts an integer and returns an integer
function squareDigits(num) {
    //separate the #'s into single digit
    //square each individual number
    //return one line that contains the square of each individual nuber
    let numArray = num.toString().split("");
    console.log(numArray);
    let squareNum = "";
    numArray.forEach(function (digit){
        squareNum += "" + Math.pow(parseInt(digit), 2);
    });
    return parseInt(squareNum);
}

console.log(squareDigits(93));
