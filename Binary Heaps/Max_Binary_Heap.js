class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(val) {
    let index = this.values.push(val) - 1;
    this.bubbleUp(index);
    return this;
  }
  bubbleUp(index) {
    let parentIndex = Math.floor(index - 1 / 2);
    if (this.values[index] > this.values[parentIndex]) {
      let temp = this.values[parentIndex];
      this.values[parentIndex] = this.values[index];
      this.values[index] = temp;
      this.bubbleUp(parentIndex);
    } else {
      return this;
    }
  }

  extractMax() {
    let max = this.values[0];
    if (this.values.length === 1) return max;
    this.values[0] = this.values.pop();
    this.sinkDown(0);
    return max;
  }

  sinkDown(index) {
    let leftChildIndex = 2 * index + 1;
    let rightChildIndex = 2 * index + 2;
    let leftChild = this.values[leftChildIndex];
    let rightChild = this.values[rightChildIndex];
    if (rightChild === undefined && !leftChild === undefined) {
      return this;
    }
    let greaterChild =
      rightChild !== undefined ? Math.max(rightChild, leftChild) : leftChild;
    let greaterChildIndex = this.values.indexOf(greaterChild);
    if (this.values[index] < greaterChild) {
      this.values[greaterChildIndex] = this.values[index];
      this.values[index] = greaterChild;
      this.sinkDown(greaterChildIndex);
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(4);
heap.insert(3);
heap.insert(1);
heap.insert(8);
heap.insert(12);
heap.extractMax();
heap.extractMax();
heap.insert(15);
heap.insert(21);
heap.extractMax();
console.log(heap.values);
