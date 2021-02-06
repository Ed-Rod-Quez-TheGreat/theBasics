//be given an array of numbers
let testArray = [8,2,7,9,4,8,8,1,900,327,999,1000]
//find average of odd numbers only
//make function that inputs an array
//loop over values and only get odds
//add all, divide by number of odds in array

function findAverage (anArray) {
  let numerator = 0;
  let denominator = 0;
  for (i=0; i < anArray.length; i++){
    if (anArray[i] % 2 !== 0){
      numerator += anArray[i];
      denominator++;
      console.log(numerator);
      console.log(denominator);
    }

  }
  return `the average of odd numbers is ${numerator/denominator}`
}

console.log(findAverage(testArray));

