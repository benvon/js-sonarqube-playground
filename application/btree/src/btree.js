class Node {
    constructor(t) {
      this.t = t; // Minimum degree of B-Tree
      this.keys = []; // Array of keys
      this.child = []; // Array of children
      this.leaf = true; // Node is a leaf node
    }
  
    insertKey(key) {
      // Insert key into non-full node
      let i = this.keys.length - 1;
  
      if (this.leaf) {
        this.keys.push({ key });
        this.keys.sort((a, b) => a.key - b.key);
      } else {
        while (i >= 0 && key < this.keys[i].key) {
          i--;
        }
  
        // Check if child node is full
        if (this.child[i + 1].keys.length === (2 * this.t) - 1) {
          // If child node is full, split it
          this.splitChild(i + 1, this.child[i + 1]);
  
          if (key > this.keys[i + 1].key) {
            i++;
          }
        }
  
        this.child[i + 1].insertKey(key);
      }
    }
  
    splitChild(i, node) {
      const t = this.t;
      const newNode = new Node(t);
  
      // Copy second half of node's keys and children into newNode
      newNode.keys = node.keys.splice(t, t - 1);
      if (!node.leaf) {
        newNode.child = node.child.splice(t, t);
      }
      
      // Insert new node into child array
      this.child.splice(i + 1, 0, newNode);
  
      // Move middle key of node up to this node
      this.keys.splice(i, 0, node.keys.splice(t - 1, 1)[0]);
    }
  }
  
  class BTree {
    constructor(t) {
      this.root = new Node(t);
    }
  
    insert(key) {
      // If root is full, split into two nodes
      const root = this.root;
      if (root.keys.length === (2 * root.t) - 1) {
        const temp = new Node(root.t);
        temp.child[0] = root;
        temp.splitChild(0, root);
        this.root = temp;
      }
  
      this.root.insertKey(key);
    }
  
    search(key, node = this.root) {
      // Return node with key, or null if not found
      let i = 0;
      while (i < node.keys.length && key > node.keys[i].key) {
        i++;
      }
  
      if (i < node.keys.length && key === node.keys[i].key) {
        return node;
      } else if (node.leaf) {
        return null;
      } else {
        return this.search(key, node.child[i]);
      }
    }
  }
  
  export default { Node, BTree };
  