function solution(inputArray) {
    let max = inputArray[0] * inputArray[1];
    for (let i = 1; i < inputArray.length - 1; i++) {
        let product = inputArray[i] * inputArray[i + 1];
        if (product > max) {
            max = product;
        }
    }
    return max;
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test checkElementsProduct

// alternative solution
// function solution(inputArray) {
//    return Math.max(...inputArray.slice(0, -1).map((x, i) => x * inputArray[i + 1]));
// }
