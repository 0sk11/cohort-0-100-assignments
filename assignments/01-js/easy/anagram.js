/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const map = new Map();
  const arr1 = str1.toLowerCase().split('');
  const arr2 = str2.toLowerCase().split('');

  arr1.forEach((s1) => {
    if (map.has(s1)) {
      map.set(s1, map.get(s1) + 1);
    } else {
      map.set(s1, 1);
    }
  });

  console.log(map)
  console.log(arr2)

  for (const s2 of arr2) {
    if (!map.has(s2)) {
      return false;
    }
    map.set(s2,map.get(s2)-1)
    if(map.get(s2) === 0){
      map.delete(s2)
    }
  }
  return map.size === 0;
}
const result = isAnagram('Debit Card', 'Bad Credit')

module.exports = isAnagram;
