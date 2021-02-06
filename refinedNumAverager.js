//Given array of integers, return the average value of all the even numbers
    //loop over an array
    //determine if even/odd--ignore odds
    //add all evens together
    //divide by number of evens added

let myNewArray = [123, 87, 42, 45, 873, 9, 3, 9, 0, -42, -8, 16, 2, "pants"];

let evenNumbs = 0;
let averageDenom = 0;

function refinedAverager(input) {

    for(i=0; i<input.length; i++) {
        if (input[i] % 2 === 0 && input[i] > 0) {
            evenNumbs += input[i];
            averageDenom += 1;
            console.log(evenNumbs);
            console.log(averageDenom);
        } 
    }
    
    
    console.log(`the average is...${evenNumbs/averageDenom}`);
    return
    //return part ends the function expressly, add it to farthest outwards part of function
};

refinedAverager(myNewArray);