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

  sort = () => {
    if (this.top == null) return false;
    let tempStack = new Stack();

    while (!this.isEmpty()) {
      let next = this.pop();
      while (!tempStack.isEmpty() && tempStack.peek() > next) {
        this.push(tempStack.pop());
      }
      tempStack.push(next);
    }

    while (!tempStack.isEmpty()) {
      console.log(tempStack.peek());
      this.push(tempStack.pop());
    }
    return true;
  };
}

let myStack = new Stack();
myStack.push(6);
myStack.push(4);
myStack.push(19);
myStack.push(-9);
myStack.push(600);
myStack.push(45);
myStack.push(1239);
myStack.push(0);

console.log(JSON.stringify(myStack));
myStack.sort();
console.log(JSON.stringify(myStack));
