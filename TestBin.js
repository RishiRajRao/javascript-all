const object = {
  who: 'World',
  greet() {
    return `Hello, ${this.who}!`;
  },
  farewell: () => {
    return `Goodbye, ${this.who}!`;
  }
};
let greetMsg = object.greet();
let farewellMsg = object.farewell();
console.log(greetMsg);    // What is logged?
console.log(farewellMsg); // What is logged?

////////////////////////////////////////////////////////////////

class Car {
  constructor() {
    // Bind sayBye but not sayHi to show the difference
    this.sayBye = this.sayBye.bind(this);
  }
  sayHi() {
    console.log(`Hello from ${this.name}`);
  }
  sayBye() {
    console.log(`Bye from ${this.name}`);
  }
  get name() {
    return 'Ferrari';
  }
}

const car = new Car();
car.sayHi(); // Hello from Ferrari



////////////////////////////////

function anotherCaller() {
  console.log(`${this.caller} called, too!`);
}

const call = {
  caller: "mom", 
  anotherCaller: anotherCaller,
  says: function() {
    console.log(`Hey, ${this.caller} just called.`);
  }
};

const next = {
  caller:'ishi',
newCall : call.anotherCaller
}


next.newCall();