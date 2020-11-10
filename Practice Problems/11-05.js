/*Given an m x n 2d grid map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
You may assume all four edges of the grid are all surrounded by water.

Example 1:
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1


Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3

*/

var numIslands = function (grid) {
  // if all zeros, zero islands
  let width = grid[0].length; //5
  let height = grid.length; //4
  // if w or h is 0, return 0

  let numberOfIslands = 0;
  let islands = [];

  // islands = [[0,0]]
  // islands = [[0,0], [1, 0], [2,0], ...]

  function checkIfSeen(coords) {
    let arr = islands.filter((e) => e[0] === coords[0] && e[1] === coords[1]);
    return arr.length !== 0;
  }

  function addEdges(x, y) {
    // base case? does (x, y) exist?
    if (x < 0 || x >= width || y < 0 || y >= height) return;
    // base case? if (x, y) is seen, stop.
    if (checkIfSeen([x, y])) return;
    // base case? if grid[y][x] is 0
    if (grid[y][x] === "0") return;

    islands.push([x, y]);

    addEdges(x + 1, y);
    addEdges(x, y + 1);
    addEdges(x - 1, y);
    addEdges(x, y - 1);
  }

  // loop through the map
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      console.log("***********************************");
      console.log(x, y);
      console.log("seen?", checkIfSeen([x, y]), grid[y][x]);
      console.log(islands);
      if (!checkIfSeen([x, y]) && grid[y][x] === "1") {
        numberOfIslands++;
      }
      addEdges(x, y);
    }
  }

  // check if its a 0 OR something else => not an island you've already seen
  // check if its a 1 AND we don't have it stored anywhere => part of an island you haven't seen

  return numberOfIslands;
};

/*console.log(
  numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ])
);*/
console.log(
  numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ])
);

// Lionel's Answer:
var numIslands = function (grid) {
  const xAxis = grid[0].length;
  const yAxis = grid.length;
  let hash = {};
  function addItemsInBounds(i, j) {
    let queue = [[i, j]];
    while (queue.length > 0) {
      let [nextI, nextJ] = queue.shift();
      if (
        grid[nextI][nextJ] === "0" ||
        hash.hasOwnProperty(`${nextI},${nextJ}`)
      )
        continue;
      hash[`${nextI},${nextJ}`] = true;
      if (nextI > 0) queue.push([nextI - 1, nextJ]); // add the slot above
      if (nextI < yAxis - 1) queue.push([nextI + 1, nextJ]); // add the slot below
      if (nextJ > 0) queue.push([nextI, nextJ - 1]); // add the slot to the left
      if (nextJ < xAxis - 1) queue.push([nextI, nextJ + 1]); // add the slot to the right
    }
  }
  let count = 0;
  for (let i = 0; i < yAxis; i++) {
    for (let j = 0; j < xAxis; j++) {
      if (grid[i][j] === "0" || hash.hasOwnProperty(`${i},${j}`)) continue;
      // otherwise we found a new Island!
      // update count, add item to the hash, add all surrounding '1's to the hash
      count++;
      addItemsInBounds(i, j);
    }
  }
  return count;
};
