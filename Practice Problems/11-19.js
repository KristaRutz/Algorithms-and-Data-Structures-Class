/* Last night you partied a little too hard. Now there's a black and white photo 
of you that's about to go viral! You can't let this ruin your reputation, so you 
want to apply the box blur algorithm to the photo to hide its content.

The pixels in the input image are represented as integers. The algorithm distorts 
the input image in the following way: Every pixel x in the output image has a value 
equal to the average value of the pixel values from the 3 × 3 square that has its 
center at x, including x itself. All the pixels on the border of x are then removed.

Return the blurred image as an integer, with the fractions rounded down.

Example

For image = [[1, 1, 1], 
             [1, 7, 1], 
             [1, 1, 1]]
the output should be boxBlur(image) = [[1]].

To get the value of the middle pixel in the input 3 × 3 square: 
(1 + 1 + 1 + 1 + 7 + 1 + 1 + 1 + 1) = 15 / 9 = 1.66666 = 1. 
The border pixels are cropped from the final result.

For

image = [[7, 4, 0, 1], 
         [5, 6, 2, 2], 
         [6, 10, 7, 8], 
         [1, 4, 2, 0]]
the output should be

boxBlur(image) = [[5, 4], 
                  [4, 4]]
There are four 3 × 3 squares in the input image, so there should be four integers 
in the blurred output. 
To get the first value: (7 + 4 + 0 + 5 + 6 + 2 + 6 + 10 + 7) = 47 / 9 = 5.2222 = 5. 
The other three integers are obtained the same way, then the surrounding 
integers are cropped from the final result.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.array.integer image

An image, stored as a rectangular matrix of non-negative integers.

Guaranteed constraints:
3 ≤ image.length ≤ 100,
3 ≤ image[0].length ≤ 100,
0 ≤ image[i][j] ≤ 255.

[output] array.array.integer

A blurred image represented as integers, obtained through the process in the description.
*/
const arrAvg = (arr) => {
  if (arr.length !== 9) throw new Error("wrong length array");
  const sum = arr.reduce((accum, curr) => {
    return accum + curr;
  }, 0);
  return Math.floor(sum / arr.length);
};
const boxBlur = (twoDimArray) => {
  // return blurred2dArray
  let result = [];
  for (let y = 1; y < twoDimArray.length - 1; y++) {
    let yRow = [];
    for (let x = 1; x < twoDimArray[0].length - 1; x++) {
      // y = 1, x = 1 arr = [y:0 x:0, y:0 x:1,y:0 x:2,y:1 x:0,y:1 x:1,y:1 x:2, y:2 x:0,y:2 x:1,y:2 x:2,]
      let arr = [
        twoDimArray[y - 1][x - 1],
        twoDimArray[y - 1][x],
        twoDimArray[y - 1][x + 1],
        twoDimArray[y][x - 1],
        twoDimArray[y][x],
        twoDimArray[y][x + 1],
        twoDimArray[y + 1][x - 1],
        twoDimArray[y + 1][x],
        twoDimArray[y + 1][x + 1],
      ];
      let avg = arrAvg(arr);
      yRow.push(avg);
    }
    result.push(yRow);
  }
  return result;
};
let image = [
  [7, 4, 0, 1],
  [5, 6, 2, 2],
  [6, 10, 7, 8],
  [1, 4, 2, 0],
];
console.log(boxBlur(image));

// Krista's answer

// function boxBlur(image) {
//   let output = [];
//   for (let i = 1; i < image.length - 1; i++){
//       output[i-1] = [];
//       for (let j = 1; j < image[0].length - 1; j++){
//           let average = Math.floor((image[i-1][j-1] + image[i][j-1] + image[i+1][j-1] +
//             image[i-1][j] + image[i][j] + image[i+1][j] +
//             image[i-1][j+1] + image[i][j+1] + image[i+1][j+1]) /9);
//           output[i-1][j-1] = average;
//       }
//   }
//   return output
// }

// def boxBlur(image):
//     return [[sum(sum(x[i:i+3]) for x in image[j:j+3])/9
//                                    for i in range(len(image[0])-2)]
//                                    for j in range(len(image)-2)]

/*

20. Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false

Example 4:
Input: s = "([)]"
Output: false

Example 5:

Input: s = "{[]}"
Output: true

Input: s = "([(]))()"

*/

function validBracketString(str) {
  // create a counter for each type of bracket
  let stack = [];

  // iterate over the string
  for (let i = 0; i < str.length; i++) {
    let curr = str[i];
    if (curr === "(" || curr === "[" || curr === "{") {
      stack.push(curr);
    } else {
      //empty stack
      if (stack.length < 1) return false;

      // non-empty stack
      if (
        (curr === ")" && stack[stack.length - 1] === "(") ||
        (curr === "]" && stack[stack.length - 1] === "[") ||
        (curr === "}" && stack[stack.length - 1] === "{")
      ) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  // return boolean if all brackets are valid
  return stack.length === 0;
}

console.log(validBracketString("(){}[)]")); // lost ya!
