// let tempFun = fun.bind(obj,val1,val2,....);
Function.prototype.myBind = function (obj, ...args) {
  console.log("this==",this)
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

const myWomen={
  name:'Nupur'
}

let tempFun = getName.myBind(myMan);
tempFun()

//so bounded function never changes its loyalty once created using bind.