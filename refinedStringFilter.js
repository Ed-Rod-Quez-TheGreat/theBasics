//reverse a string 

//input string, output is reversed String
// create testVariable with a testString in it.
// create a final variable to hold the reversed sequence
//create a loop take each character "sequentially"
//dump last character in the test variable into new variable and restart.
// stop when finished with string.


let testVariable = "Supercalifragilisticexpialidocious";
let testVar2 = "AllTheKingsMen";
let testVar3 = "8675309";
let reversedString = "" ;

function reverseReverse (input) {
    // i's 'count' begins at end of string (input.length-1)
    // i stops as a loop when no longer greater than -1 (stops @ zero to handle index 0)
    // i decreases value every iteration
    for (let i = input.length - 1 ; i > -1; i--) {
    reversedString += input[i];

    }
    console.log (reversedString)
    return;
}

reverseReverse(testVariable);
reverseReverse(testVar2);
reverseReverse(testVar3);
