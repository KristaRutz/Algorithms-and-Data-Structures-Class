// September 10, 2020
let stack = [5, 4, 3, 2, 1];
let queue = [1, 2, 3, 4, 5];

/*
Simplify Directory Path
Asked in:  Microsoft
Given a string A representing an absolute path for a file (Unix-style).
Return the string A after simplifying the absolute path.

Note:
Absolute path always begin with ’/’ ( root directory ).
Path will not have whitespace characters.

Input Format
The only argument given is string A.
Output Format
Return a string denoting the simplified absolue path for a file (Unix-style).

For Example

Input 1: A = "/home/"
Output 1: "/home"

Input 2: A = "/a/./b/../../c/"
/ + a/ + null + b/ - b/ - a/ + /c
Output 2: "/c"

Input 3: A = '/hello/////there/'
output: '/hello/there'

Input 4: A = "/hi/../hi/../../../"
Output: Error
*/

function simplifyPath(a) {
  let original = a.split("/");
  //a = "/a/./b/../../c/"
  //arr = ['', 'a', '.', ...]

  let array = [""];

  for (let i = 0; i < original.length; i++) {
    let next = original[i];
    // - remove all empty strings
    // - check for "." => ignore
    if (next === "" || next === ".") {
      continue;
    } else if (next === "..") {
      // - check for ".." => pop() the final element off
      if (array.length <= 1) throw new Error("This path doesn't exist");
      array.pop();
    } else {
      // - otherwise, push
      array.push(next);
    }
  }

  let output = array.join("/");
  return output;
}

let A = "/hi//////there";
console.log(simplifyPath(A));

function reducePath(a) {
  let original = a.split("/");

  let final = original.reduce(
    (accumulator, currentValue, currentIndex, originalArray) => {
      if (currentValue === "" || currentValue === ".") {
        return accumulator;
      } else if (currentValue === "..") {
        if (accumulator.length === 1) throw new Error("File path not allowed");
        accumulator.pop();
      } else {
        accumulator.push(currentValue);
      }

      return accumulator;
    },
    [""]
  );

  return final.join("/");
}

console.log(reducePath(A));
