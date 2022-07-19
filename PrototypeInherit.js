function makeObj(name,age){
  this.name = name;
  this.age = age;
}

makeObj.prototype.getName = function(){
  return this.name;
}

const newObj = new makeObj('rishi',30);
console.log(makeObj.prototype===newObj.__proto__);