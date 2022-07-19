const object = {
  message: 'Hello, World!',

  logMessage() {
    console.log(this.message);
  }
};

setTimeout(object.logMessage, 1000);
debugger
console.log(object);
/////////////////
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 1
////////////////////////////////

// // Each time bigFunc is called, an array of size 700 is being created,
// // Modify the code so that we don't create the same array again and again

function bigFunc(){
  let newArray = new Array(700).fill('♥');
  // return newArray[element]
  return (element) => newArray[element];
}

let getElement = bigFunc(); // Array is created only once
getElement(599);
getElement(670);  