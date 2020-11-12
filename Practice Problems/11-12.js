/* 953. Verifying an Alien Dictionary

In an alien language, surprisingly they also use 
english lowercase letters, but possibly in a different order. 
The order of the alphabet is some permutation of lowercase letters.

Given a sequence of words written in the alien language, 
and the order of the alphabet, return true if and 
only if the given words are sorted lexicographicaly 
in this alien language.

Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
Output: true
Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
Example 2:

Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
Output: false
Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.
Example 3:

Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
Output: false
Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character (More info).


function compare(a, b) {
  if (a is less than b by some ordering criterion) {
    return -1;
  }
  if (a is greater than b by the ordering criterion) {
    return 1;
  }
  // a must be equal to b

  return 0;
}


let example = sorted.every((elem, ind, arr) => {
    return elem === words[ind]
})


let comparator = (x) => {
    // do something cool to make a dictionary here. 
    return (a, b) => {
        return x[a] > x[b]
    }
}

let addFive = add(5)

addFive(10) => 15
*/

/**
 * @param {string[]} words
 * @param {string} order "abcdef..."
 * @return {boolean}
 */

const isAlienSorted = function (words, order) {
  let sorted = words.slice();

  // Math.min(a.length, b.length)*26
  const compare = function (a, b) {
    for (let i = 0; i < Math.min(a.length, b.length); i++) {
      let indexA = order.indexOf(a[i]);
      let indexB = order.indexOf(b[i]);

      if (indexA > indexB) return 1;
      if (indexA < indexB) return -1;
    }

    if (a.length > b.length) return 1;
    if (a.length < b.length) return -1;
    return 0;
  };

  sorted.sort(compare);
  console.log(sorted);
  console.log(words);
  // check if words and sorted contain all the same elements and return true/false
  return words.every((elem, idx) => elem === sorted[idx]);
};

// console.log(
//   isAlienSorted(["word", "world", "row"], "worldabcefghijkmnpqstuvxyz")
// );
// console.log(
//   isAlienSorted(["world", "word", "row"], "worldabcefghijkmnpqstuvxyz")
// );
console.log(
  isAlienSorted(
    ["apple", "apple", "baby", "cake", "cat", "hello", "yellow", "krista"],
    "abcdefghijklmnopqrstuvwxyz"
  )
);
