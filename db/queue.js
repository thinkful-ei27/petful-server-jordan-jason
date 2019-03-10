const _Node = require('./node');

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    //create new node with input data
    const node = new _Node(data);
    // if queue is empty make new node first in queue
    if (this.first === null) {
      this.first = node;
    }
    // if there is at least one item already in the queue
    // link the item that is last to new node
    if (this.last) {
      node.next = this.last;
      this.last.prev = node;
    }
    // make new node the last item in the queue every time
    this.last = node;
  }

  dequeue() {
    //if queue is already empty, return null;
    if (this.first === null) {
      return;
    }
    // create variable equal to first item to save it in memory
    // advance next item to first in line
    const node = this.first;
    this.first = node.prev;
    // if item being removed is last in line, reset last to null
    if (node === this.last) {
      this.last = null;
    }
    // return data of item that was first in line
    return node.value;
  }

  peek() {
    return this.first.data;
  };

}

module.exports = Queue;