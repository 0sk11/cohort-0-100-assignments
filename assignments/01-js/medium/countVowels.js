/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    function isVowel(ch){
      return ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u'
    }
    const arr = str.toLowerCase().split("")
    return arr.reduce((acc,a)=>{
      if(isVowel(a)){
        acc++;
      }
      return acc;
    },0)

}

module.exports = countVowels;