# Challenge Summary
<!-- Description of the challenge -->
Write a function called repeated word that finds the first word to occur more than once in a string and take an argument of type string  string and thwn Return  string
## Whiteboard Process
<!-- Embedded whiteboard image -->
![alt text](witeboard.repeated.jpg.jpg)
## Approach & Efficiency
 What approach did you take? Why? What is the Big O space/time for this approach?
 i used fot loop to loop inside the array of words & object of words counter  
Time bigO(2n)
cpace BigO(n)
## Solution
<!-- Show how to run your code, and examples of it in action -->

repeatedWord (text) { 

    let arrWords = text.split(" ");
    let mappingWords = {};

    for (let i = 0; i < arrWords.length; i++) {

      let counter = mappingWords[arrWords[i]];
      console.log(" loop 1 counter  value is ====> " +mappingWords[arrWords[i]]+" >>>>>>"+arrWords[i])
      let appearence = counter ? counter : 0;
      console.log(" loop 1 appearence  value is ====> " +mappingWords[arrWords[i]]+" >>>>>>"+arrWords[i])
      if (appearence > 1) { break }
      mappingWords[arrWords[i]] = appearence + 1;
      this.set(arrWords[i],arrWords[i])
    }
    let mostAppearence;
    let counter = 1;
    for (let x in mappingWords) {
      if (mappingWords[x] > counter) {
        mostAppearence = x;
      
      }
    }    return mostAppearence;  }