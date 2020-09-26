class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.nodes = [];
  }
  enqueue(value, priority) {
    let newNode = new Node(value, priority);
    this.nodes.push(newNode);
    let index = this.nodes.length - 1;
    this.bubbleUp(index);
    return this;
  }
  bubbleUp(index) {
    let parentIndex = index > 0 ? Math.floor(index - 1 / 2) : 0;
    if (this.nodes[index].priority > this.nodes[parentIndex].priority) {
      let temp = this.nodes[parentIndex];
      this.nodes[parentIndex] = this.nodes[index];
      this.nodes[index] = temp;
      this.bubbleUp(parentIndex);
    } else {
      return this;
    }
  }

  dequeue() {
    let max = this.nodes[0];
    if (this.nodes.length === 1) return max;
    this.nodes[0] = this.nodes.pop();
    this.sinkDown(0);
    return max;
  }

  sinkDown(index) {
    // this.nodes[index] = 12
    let current = this.nodes[index];
    let leftIdx = 2 * index + 1;
    let rightIdx = 2 * index + 2;

    // if current node has no children, it's already sunk to the end
    if (leftIdx >= this.nodes.length) {
      return this;
    }
    if (rightIdx >= this.nodes.length) {
      if (this.nodes[leftIdx].priority > current.priority) {
        this.nodes[index] = this.nodes[leftIdx];
        this.nodes[leftIdx] = current;
        this.sinkDown(leftIdx);
      } else return this;
    } else {
      if (this.nodes[leftIdx].priority > this.nodes[rightIdx].priority) {
        if (this.nodes[leftIdx].priority > current.priority) {
          this.nodes[index] = this.nodes[leftIdx];
          this.nodes[leftIdx] = current;
          this.sinkDown(leftIdx);
        } else return this;
      } else {
        if (this.nodes[rightIdx].priority > current.priority) {
          this.nodes[index] = this.nodes[rightIdx];
          this.nodes[rightIdx] = current;
          this.sinkDown(rightIdx);
        } else return this;
      }
    }
  }
}

let queue = new PriorityQueue();
queue.enqueue("brush teeth", 2);
queue.enqueue("organize photos", 10);
queue.enqueue("buy plane ticket", 1);
queue.enqueue("eat breakfast", 0);
queue.dequeue();
queue.dequeue();
queue.enqueue("get a job", 0);
queue.enqueue("get a dog", 20);
queue.dequeue();
console.log(JSON.stringify(queue.nodes));
