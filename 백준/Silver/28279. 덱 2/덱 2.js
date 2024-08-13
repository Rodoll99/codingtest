const fs = require("fs");
const [N, ...input] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const n = 1000000;
let output = "";

const deque = new Array(n);
let size = 0;
let front = -1;
let rear = -1;

const addFirst = (e) => {
  if (size === 0) {
    front = 0;
    rear = 0;
  } else {
    if (front === 0) {
      front = n - 1;
    } else {
      front--;
    }
  }

  deque[front] = e;
  size++;
};

const addLast = (e) => {
  if (size === 0) {
    front = 0;
    rear = 0;
  } else {
    if (rear === n - 1) {
      rear = 0;
    } else {
      rear++;
    }
  }

  deque[rear] = e;
  size++;
};

const removeFirst = () => {
  output += deque[front] + "\n";
  size--;
  if (front === n - 1) {
    front = 0;
  } else {
    front++;
  }
};

const removeLast = () => {
  output += deque[rear] + "\n";
  size--;

  if (rear === 0) {
    rear = n - 1;
  } else {
    rear--;
  }
};

input.forEach((e) => {
  const [exe, num] = e.split(" ").map(Number);

  if (exe === 1) {
    addFirst(num);
  }

  if (exe === 2) {
    addLast(num);
  }

  if (exe === 3) {
    size === 0 ? (output += "-1\n") : removeFirst();
  }

  if (exe === 4) {
    size === 0 ? (output += "-1\n") : removeLast();
  }

  if (exe === 5) {
    output += size + "\n";
  }

  if (exe === 6) {
    size === 0 ? (output += "1\n") : (output += "0\n");
  }

  if (exe === 7) {
    size === 0 ? (output += "-1\n") : (output += deque[front] + "\n");
  }

  if (exe === 8) {
    size === 0 ? (output += "-1\n") : (output += deque[rear] + "\n");
  }
});

console.log(output);