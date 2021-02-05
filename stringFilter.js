//reverse a string 
//input string, output is reversed


// create holding variable 
//create a loop take each character "sequentially"

let testString = "LaunchCode";
let reversedString = "" ;

function stringFilter (input) {
    console.log(input);
    for (let i = input.length - 1 ; i > -1; i--) {
    reversedString += input[i];

    console.log(i);
    }
    console.log (reversedString)
    return;
}

//input [i]
//dump into newVar [i+1]

stringFilter(testString);
