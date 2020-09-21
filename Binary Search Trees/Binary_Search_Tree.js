class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(value = null) {
    if (value) {
      this.root = new Node(value);
    } else {
      this.root = null;
    }
  }

  insert(value) {
    let node = new Node(value);
    if (this.root === null) {
      this.root = node;
    } else {
      let current = this.root;
      while (true) {
        if (node.value > current.value) {
          // go to right
          if (current.right) {
            current = current.right;
            continue;
          } else {
            current.right = node;
            break;
          }
        } else if (node.value < current.value) {
          // go to left
          if (current.left) {
            current = current.left;
            continue;
          } else {
            current.left = node;
            break;
          }
        } else {
          // equal?
          return undefined;
        }
      }
    }
    return this;
  }
  find(value) {
    if (this.root === null) return undefined;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }
  containsNode(value) {
    if (this.root === null) return false;
    let current = this.root;
    while (current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
}

let tree = new BinarySearchTree(4);
tree.insert(3);
tree.insert(12);
tree.insert(8);
tree.insert(6);
tree.insert(2);
console.log(JSON.stringify(tree));

console.log(tree.containsNode(6), tree.containsNode(1));
console.log(tree.find(6), tree.find(1));
