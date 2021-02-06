//create a function that filters a string vowels out
let testingString = "the quick brown fox jumps over the lazy dog";
//function inputs a string
//for loops over values in string
// if stmnt checks against known vowels AEIOU and Y
//if not vowel, spill into new variable
let consonents = "";

function letterFilter (sentence) {
    for (i=0; i< sentence.length; i++){
        if(sentence[i] !== "a" && sentence[i] !=="e" && sentence[i] !=="i" &&sentence[i] !=="o" && sentence[i] !=="u" && sentence[i] !=="y"){
            consonents += sentence[i];
        }
    }

    return consonents;
}

console.log(letterFilter(testingString));