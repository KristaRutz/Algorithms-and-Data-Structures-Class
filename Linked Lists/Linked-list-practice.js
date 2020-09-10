// write a function that removes duplicates from an unsorted linked list

// before removeDuplicates: (1) -> (1) -> (3) -> (9) -> (9) -> (3)
// after removeDuplicates: (1) -> (3) -> (9) || (1) -> (9) -> (3)

/* Possible Q's 

- needs for our list, do we need a tail?
- what can I assume about the inputs?
- which edge cases are relevant?

*/

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insert(node) {
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  removeDuplicates() {
    // create a memo of the values
    let values = {};

    let current = this.head;
    let prev;
    while (current) {
      // if the value has already been seen, delete the repeated node

      if (values.hasOwnProperty(current.value)) {
        // delete the node
        //  - set "prev.next" to be "node.next" (have pointer from before point to child instead)
        prev.next = current.next;
      } else {
        // add current.value to values
        values[current.value] = true;
        prev = current;
      }

      // adjust the pointers

      current = current.next;
      if (current === null) {
        this.tail = prev;
      }
    }
  }
}

let list = new LinkedList();
let node1 = new Node(1);
let node2 = new Node(1);
// let node3 = new Node(3);
// let node4 = new Node(9);
// let node5 = new Node(9);
// let node6 = new Node(3);
list.insert(node1);
list.insert(node2);
// list.insert(node3);
// list.insert(node4);
// list.insert(node5);
// list.insert(node6);

list.removeDuplicates();

console.log(JSON.stringify(list));
