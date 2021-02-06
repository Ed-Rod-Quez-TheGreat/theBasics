// create function that inputs array
// make loop to go over each value in array
// make variable to hold largest number
// if new number is larger than current value in 'largest num' var, replace
// return largest number to user

function findBiggestNumber(array) {
    var biggestNum = 0;
    
    for (let i = 0; i < array.length; i++){
        
        if (array[i] > biggestNum) {
            biggestNum = array[i];
        }
    }

    return biggestNum;
    
  }
  findBiggestNumber([3,2,7,84,941,1,6,18]);