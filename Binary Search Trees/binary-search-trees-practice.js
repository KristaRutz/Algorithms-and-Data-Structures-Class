class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(value) {
    this.root = new Node(value);
  }

  insert(value) {
    let newNode = new Node(value);
    // make sure there's a root
    if (this.root === null) {
      this.root = newNode;
      return;
    }
    let current = this.root;
    while (current) {
      if (current.value === value) break;
      // is value < current.value? --> check the left side
      if (value < current.value) {
        if (current.left !== null) {
          current = current.left;
          continue;
        } else {
          current.left = newNode;
          return;
        }
      } else if (value > current.value) {
        // if value > current.value --> check the right side
        if (current.right !== null) {
          current = current.right;
          continue;
        } else {
          current.right = newNode;
          return;
        }
      }
    }
  }

  delete(value) {}

  contains(value) {}
}

let tree = new BinarySearchTree(10);
tree.insert(14);
tree.insert(6);
tree.insert(5);
tree.insert(12);
tree.insert(14);
tree.insert(7);
console.log(JSON.stringify(tree));

// insert(7)

//         10
//     6        14
//  5   10    12   19
