const Node = require('./btree');

describe('Node', () => {
  let node;

  beforeEach(() => {
    node = new Node(2);
  });

  it('starts as a leaf node', () => {
    expect(node.leaf).toBe(true);
  });

  it('inserts keys into the node', () => {
    node.insertKey(1);
    node.insertKey(3);
    node.insertKey(2);

    expect(node.keys.length).toBe(3);
    expect(node.keys[0].key).toBe(1);
    expect(node.keys[1].key).toBe(2);
    expect(node.keys[2].key).toBe(3);
  });

  it('splits a child node when it is full', () => {
    node.insertKey(1);
    node.insertKey(2);
    node.insertKey(3);
    node.insertKey(4);

    expect(node.keys.length).toBe(1);
    expect(node.keys[0].key).toBe(2);
    expect(node.child.length).toBe(2);
    expect(node.child[0].keys.length).toBe(2);
    expect(node.child[1].keys.length).toBe(2);
  });
});