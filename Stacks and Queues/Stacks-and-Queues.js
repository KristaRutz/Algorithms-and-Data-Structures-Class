class StackNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  pop = () => {
    if (this.top == null) throw new Error("Stack is empty");
    let item = this.top.data;
    this.top = this.top.next;
    return item;
  };

  push = (nodeData) => {
    let newNode = new StackNode(nodeData);
    newNode.next = this.top;
    this.top = newNode;
  };

  peek = () => {
    if (this.top == null) throw new Error("Stack is empty");
    return this.top.data;
  };

  isEmpty = () => {
    return this.top == null;
  };
}

class QueueNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  add = (nodeData) => {
    let newNode = new QueueNode(nodeData);
    if (this.last) {
      this.last.next = newNode;
    }
    this.last = newNode;
    if (this.first == null) {
      this.first = this.last;
    }
  };

  remove = () => {
    if (this.first == null) throw new Error("Queue is empty");
    let item = this.first.data;
    this.first = this.first.next;
    if (first == null) {
      last = null;
    }
    return item;
  };

  peek = () => {
    if (this.first == null) throw new Error("Queue is empty");
    return this.first.data;
  };

  isEmpty = () => {
    return this.first == null;
  };
}
