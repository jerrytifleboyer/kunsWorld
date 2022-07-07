class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// w/ while loop
const printLinkedLists = (head) => {
  let current = head;
  while (current != null) {
    console.log("current", current);
    console.log("current value", current.val);
    current = current.next;
  }
};
printLinkedLists(a);

// w/ recursion
const printLinkedListsRecursively = (head) => {
  if (head === null) return;
  console.log(head.val);
  printLinkedListsRecursively(head.next);
};

printLinkedListsRecursively(a);
