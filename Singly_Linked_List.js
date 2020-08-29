/* Node definition */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/* Manually linked list */

// var first = new Node("Hi");
// first.next = new Node("there");
// first.next.next = new Node("friend");

// console.log(first);

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /* Return a node based on its position in the list */
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let current = this.head;
    let counter = 0;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  /* Set a node's value based on its position in the list, and return a bool whether or not it was set */
  set(index, val) {
    const node = this.get(index);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }

  /* Return a node based on its position in the list */
  insert(index, val) {
    let newNode = new Node(val);
    if (index < 0 || index > this.length) {
      return false;
    } else if (index === this.length) {
      return !!this.push(val);
    } else if (index === 0) {
      return !!this.unshift(val);
    } else {
      let prev = this.get(index - 1);
      newNode.next = prev.next;
      prev.next = newNode;
      this.length++;
      return true;
    }
  }

  /* Add an element to the end, and return the new list */
  push(val) {
    const next = new Node(val);
    if (!this.head) {
      this.head = next;
    } else {
      this.tail.next = next;
    }
    this.tail = next;
    this.length++;

    return this;
  }

  // traverse() {
  //   var current = this.head;
  //   while (current) {
  //     console.log(current.val);
  //     current = current.next;
  //   }
  // }

  /* Remove an element from the end, and return the removed element */
  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }

    newTail.next = null;
    this.tail = newTail;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  /* Remove an element from the beginning, and return the removed element */
  shift() {
    if (!this.head) return undefined;
    const shiftedHead = this.head;
    this.head = shiftedHead.next;
    shiftedHead.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return shiftedHead;
  }

  /* Add an element to the beginning, and return the new list */
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.tail = newNode;
    } else {
      newNode.next = this.head;
    }
    this.head = newNode;
    this.length++;
    return this;
  }
}

var list = new SinglyLinkedList();
list.push("HELLO");
list.push("GOODBYE");
list.push("THE SKY");

// console.log(list.pop());
// console.log(list.shift());
list.unshift("HEYYYY");

console.log(list.get(0));
console.log(list.get(-1));
console.log(list.get(2));
