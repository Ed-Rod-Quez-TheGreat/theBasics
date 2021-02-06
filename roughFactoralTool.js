// Return the factorial of the provided integer.
// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
// Factorials are often represented with the shorthand notation n!
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
// Only integers greater than or equal to zero will be supplied to the function.

// create function that takes a number for factoral.
// make for loop. 
//make a variable to hold running factoral sum.
//have loop stop before 0
// loop iterates down


function factoralization (numero) {
    for (var factor = 1; numero > 0; numero--) {
      factor *= numero;
        

    }

    return console.log(factor);
}

factoralization(10);