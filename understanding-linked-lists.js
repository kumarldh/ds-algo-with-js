/**
 * A linked list is just a list or sequence of nodes. When a node in a linked list points only to the next node in the list
 * it is known as single linked list. When the node points to next as well as prev node, the list is known as doubly linked
 * list.
 */

function SingleNode(data, next) {
  return {
    data,
    next,
  };
}

function DoubleNode(data, next, prev) {
  return {
    data,
    next,
    prev,
  };
}

function List(singleNode) {
  let head = null;
  const setHead = (singleNode) => {
    if (head.next) {
      head.next = singleNode;
    } else {
      head = singleNode;
    }
  };
  const setTail = (singleNode) => {
    if (head.next) {
      head.next = singleNode;
    } else {
      head = singleNode;
    }
  };
  const traverse = () => {};
  return { head, setHead, setTail, traverse };
}

console.log(new List(new SingleNode(10, null)));
