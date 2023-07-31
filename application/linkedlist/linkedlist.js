class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    // Add a new node to the end of the list
    append(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
      this.size++;
    }
  
    // Add a new node at the beginning of the list
    prepend(data) {
      const newNode = new Node(data);
      newNode.next = this.head;
      this.head = newNode;
      this.size++;
    }
  
    // Insert a new node at a specified index
    insertAt(data, index) {
      if (index < 0 || index > this.size) {
        throw new Error('Index out of bounds');
      }
  
      if (index === 0) {
        this.prepend(data);
      } else if (index === this.size) {
        this.append(data);
      } else {
        const newNode = new Node(data);
        let current = this.head;
        let count = 0;
        while (count < index - 1) {
          current = current.next;
          count++;
        }
        newNode.next = current.next;
        current.next = newNode;
        this.size++;
      }
    }
  
    // Remove the node at a specified index
    removeAt(index) {
      if (index < 0 || index >= this.size) {
        throw new Error('Index out of bounds');
      }
  
      if (index === 0) {
        this.head = this.head.next;
      } else {
        let current = this.head;
        let count = 0;
        while (count < index - 1) {
          current = current.next;
          count++;
        }
        current.next = current.next.next;
      }
      this.size--;
    }
  
    // Get the element at a specified index
    getAt(index) {
      if (index < 0 || index >= this.size) {
        throw new Error('Index out of bounds');
      }
  
      let current = this.head;
      let count = 0;
      while (count < index) {
        current = current.next;
        count++;
      }
      return current.data;
    }
  
    // Print the linked list
    print() {
      let current = this.head;
      const elements = [];
      while (current) {
        elements.push(current.data);
        current = current.next;
      }
      console.log(elements.join(' -> '));
    }
  
    // Get the size of the linked list
    getSize() {
      return this.size;
    }
  
    // Check if the linked list is empty
    isEmpty() {
      return this.size === 0;
    }
  }
  
  // Example usage:
  const linkedList = new LinkedList();
  linkedList.append(10);
  linkedList.append(20);
  linkedList.prepend(5);
  linkedList.insertAt(15, 2);
  
  linkedList.print(); // Output: 5 -> 10 -> 15 -> 20
  console.log('Size:', linkedList.getSize()); // Output: Size: 4
  console.log('Is Empty:', linkedList.isEmpty()); // Output: Is Empty: false
  console.log('Element at index 2:', linkedList.getAt(2)); // Output: Element at index 2: 15
  
  linkedList.removeAt(1);
  linkedList.print(); // Output: 5 -> 15 -> 20
  