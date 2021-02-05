// take string and reverse characters
// create array to hold string as individual elements
// cut out each end character of array into new variable

function reverseString(str) {
    individArray = str.split("");
    individArray.reverse();
    newStr = individArray.join("");
    

    return newStr;
    
}

console.log(reverseString("hello"));
console.log(reverseString("Howdy"));
console.log(reverseString("Greeting from Captain Pantalones"));

console.log(typeof(reverseString("hello")))