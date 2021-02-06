// input is array of arrays
//take largest num from each sub array
//1 value from each sub array provided
//return new array with highest value from each sub array

let biggums = [[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]];

let smallums = biggums[0];

console.log(smallums);
console.log(smallums.sort(function(a, b){return b-a}));

function biggestValFromMultiArrays(arrayOfArrays) {
    // arrayOfArrays[i] allows access to each member
    var biggestArrayValues = [];
    for (let i = 0; i < arrayOfArrays.length; i++){
        
        if (arrayOfArrays[i][i] > biggestNum) {
            biggestNum = array[i];

        }

    }

    return biggestNum;
  }

