//input a string
//split string into words w/split
// find length of each value
//return out number of each characters?




function findLongestWordLength(str) {
    newArray = str.split(" ");
    var longestWord = 0;
    console.log(newArray);
    for (let i = 0; i < newArray.length; i++){
        
        if (newArray[i].length > longestWord){
            longestWord = newArray[i].length;
        }
    }

    return longestWord;
    //return str.length;
  }
  
  //findLongestWordLength("The quick brown fox jumped over the lazy dog");

  //findLongestWordLength("What is the average airspeed velocity of an unladen swallow")

  findLongestWordLength("What if we try a super-long word such as otorhinolaryngology");
  