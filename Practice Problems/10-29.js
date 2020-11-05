/* CONTAINER WITH MOST WATER

Given: array of non-negative ints
Output: positive integer representing the maximum area

max x value = index of final array element (aka array.length - 1)
min x value = index of first item, aka 0
max y value = value of second to largest element (or tied with largest)
min y value = 0 (non-negative ints)

edge cases:
- empty array
- array with 1 item


Example: [2, 0, 5, 7, 5]
output: 10
        |
        |
      | | |
      | | |
      | | |
|     | | |
|  .  | | |

current max: 10


Example: [3, 3, 3, 6, 7, 3, 3, 3, 3, 3]
Output: 27

(index1 - index2) * Math.min(arr[index1], arr[index2])

Example: [1, 2, 3]
Output: 2

(x, y): (2, 4) 
        (4, 2)
*/

function calculateMostWater(arr){
  let currentMax = 0;
  if (arr.length >= 1) return currentMax;

  for (let i = 0; i < arr.length - 1; i++){
    for (let j = i + 1; j < arr.length; j++){
      if (i != j){
        // calculate area of this pair
        let area = Math.abs(j-i) * Math.min(arr[i], arr[j]);
        // compare to currentMax
        // update if necessary
        currentMax = Math.max(area, currentMax);
      }
    }
  }

  return currentMax;
}


var maxAreaBruteForce = function(height) {
    let max = 0;
    for (let i = 0; i < height.length; i++) {
        let localMax = 0;
        for (let j = i + 1; j < height.length; j++) {
            localMax = Math.max(localMax, Math.min(height[i],height[j]) * (j - i));
        }
        max = Math.max(max, localMax);
    }
    return max
};

var maxArea = function(height) {
    let start = 0;
    let end = height.length - 1;
    let max = 0;
    while(start < end){
        max = Math.max(max, Math.min(height[start],height[end]) * (end - start))
        if(height[start] < height[end]){
            start++;
        } else {
            end--;
        }
    }
    return max;
}


function calculateMostWater(arr){
    let currentMax = 0;
    if (arr.length >= 1) return currentMax;
  
    for (let i = 0; i < arr.length - 1;){
      for (let j = arr.length; j > i;){
          // calculate area of this pair
          let area = Math.abs(j-i) * Math.min(arr[i], arr[j]);
          // compare to currentMax
          // update if necessary
          currentMax = Math.max(area, currentMax);
          if(arr[i] < arr[j]){
              i++
          } else {
              j--
          }
      }
    }
  
    return currentMax;
  }
  



// O(n * n) => n(1) + n(2) + n(3)... n(n)
// 0(n*(n-1)/2) => n - 1(1) + n - 2 + n - 3 .... n - n
// [10, 9, 8, 7, 6, 5, 4, 3, 2, 1] = 55 work steps. n*(n-1)/2