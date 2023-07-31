import { BTree } from './btree';

const tree = new BTree(3);
tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(40);
tree.insert(50);

console.log(tree.search(20)); // Node { ... }
console.log(tree.search(60)); // null
