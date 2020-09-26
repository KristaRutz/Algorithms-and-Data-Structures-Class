/*
given an array that represents a max Binary heap,
convert that array into an array which represents a 
min binary heap.

This should take O(n) time.

input: [100, 40, 80, 30, 35, 60, 65, 15, 20, 31]
output: [15, ... 100]

return input.sort() // o(n log n)

*/

class minBH {
  constructor() {
    this.values = [];
  }

  insert(value) {
    // push a new value to end of this.values
    this.values.push(value);
    this.bubbleUp(this.values.length - 1);
    return this.values;
  }
  bubbleUp(index) {
    if (index === 0) return;
    let parentIndex = Math.floor((index - 1) / 2);
    if (this.values[index] < this.values[parentIndex]) {
      // swap
      let temp = this.values[index];
      this.values[index] = this.values[parentIndex];
      this.values[parentIndex] = temp;
      // call bubble up recursively

      this.bubbleUp(parentIndex);
    }
  }
}

// let heap = new minBH();
// heap.insert(100);
// heap.insert(40);
// heap.insert(80);
// heap.insert(30);
// heap.insert(35);
// heap.insert(60);
// console.log(heap);

// [30, 35, 60, 100, 40, 80] ==> 6
// [30, 40, 35, 80, 60, 100] => 3

function convertMaxToMin(maxBH) {
  // iterate over the input array, adding to a minBH
  let heap = new minBH();
  for (let i = maxBH.length - 1; i >= 0; i--) {
    heap.insert(maxBH[i]);
  }
  return heap.values;
  // return array as minBinaryHeap
}

console.log(convertMaxToMin([100, 40, 80, 30, 35, 60, 65, 15, 20, 31]));
