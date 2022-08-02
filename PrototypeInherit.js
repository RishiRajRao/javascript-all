// function makeObj(name,age){
//   this.name = name;
//   this.age = age;
// }

// makeObj.prototype.getName = function(){
//   return this.name;
// }

// const newObj = new makeObj('rishi',30);
// let res = newObj.getName();
// console.log(makeObj.prototype===newObj.__proto__);


const firstObj = {
  name:'rishi',
  age:30,
  getName:function(){
    console.log(this.__proto__);
  }
}

const secondObj = {
  name :'nup'
}

const thirdObj = Object.create(firstObj, {department: {
  value: 'HR',
  enumerable: true
}})


// secondObj.__proto__ = firstObj

console.log(secondObj.__proto__.prototype)
