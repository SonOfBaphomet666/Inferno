
// let vasya = { name: "Вася", age: 25};
// let petya = { name: "Петя", age: 34};
// let gog = { name: "Гог", age: 17};

// let arr = [vasya, petya, gog];

let message = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let readMap = new WeakMap();

readMap.set(message[0], new Date(2023, 5, 11))

console.log(readMap)

// readMessage.add(message[0]);
// readMessage.add(message[1]);

// readMessage.add(message[0]);

// console.log("Read message 0: " + readMessage.has(message[0]));

// console.log(


