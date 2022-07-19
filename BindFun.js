// let tempFun = fun.bind(obj,val1,val2,....);
Function.prototype.myBind = function (obj, ...args) {
  return (...newArgs) => this.apply(obj, [...args, ...newArgs]);
};
// Function.prototype.myBind = function(args){

// }


function getName(){
   console.log(this.name);
}

const myMan={
  name:'rishi'
}

let tempFun = getName.myBind(myMan);
tempFun();