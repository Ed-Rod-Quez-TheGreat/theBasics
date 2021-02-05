//Given array of integers, return the average value of all the odd numbers

let mexican = "me"
console.log(mexican);
let caucasian = "long pantalones"
console.log(caucasian);

let testArray = [3, 27, 84, 91, 98, 36, 42];
console.log(8 % 2);
console.log(testArray[2]);

let evens = 0;
let odds = 0; 
let averageEven = 0;
let averageOdd = 0;
let countEven = 0;
let countOdd = 0;

function numberDivider(intake) {
    for (i=0; i<intake.length; i++) {
        if(intake[i] % 2 === 0) {
            evens += intake[i];
            countEven += 1;
            console.log(evens + "even catagory");
        };
        if(intake[i] % 2 !== 0) {
            odds += Number(intake[i])
            countOdd += 1;
            console.log(odds + "odd category");
        };
    };
    console.log(`${odds/countOdd} odd average`);
    console.log(`${evens/countEven} even average`);
};

numberDivider(testArray);

