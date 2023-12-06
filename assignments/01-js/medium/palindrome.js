/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase()
  let arr1 = []
  for(let i=0;i<str.length;i++){
    if(str[i].match(/[a-z]/i)){
      arr1.push(str[i])
    }
  }
  console.log(arr1)
  let arr2 = arr1.toReversed()

  return JSON.stringify(arr1) === JSON.stringify(arr2);
}

console.log(isPalindrome('Able, was I ere I saw Elba!'))

module.exports = isPalindrome;
