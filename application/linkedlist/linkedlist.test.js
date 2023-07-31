const LinkedList = require('./linkedlist');

describe('LinkedList', () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  it('starts empty', () => {
    expect(list.size).toBe(0);
    expect(list.head).toBeNull();
  });

  it('adds elements to the list', () => {
    list.add(1);
    list.add(2);
    list.add(3);

    expect(list.size).toBe(3);
    expect(list.getAt(0)).toBe(1);
    expect(list.getAt(1)).toBe(2);
    expect(list.getAt(2)).toBe(3);
  });

  it('removes elements from the list', () => {
    list.add(1);
    list.add(2);
    list.add(3);

    list.removeAt(1);

    expect(list.size).toBe(2);
    expect(list.getAt(0)).toBe(1);
    expect(list.getAt(1)).toBe(3);
  });

  it('throws an error when trying to remove an element at an out-of-bounds index', () => {
    expect(() => list.removeAt(0)).toThrow('Index out of bounds');
    expect(() => list.removeAt(1)).toThrow('Index out of bounds');
  });

  it('throws an error when trying to get an element at an out-of-bounds index', () => {
    expect(() => list.getAt(0)).toThrow('Index out of bounds');
    expect(() => list.getAt(1)).toThrow('Index out of bounds');
  });
});