
// console.log(add(5)(2)(4)(5)());

// const add = (args) => {
  
// }

// const sum = curryFun()
// console.log(add(2)(3)())

function add(a){
  return  (b)=> {
    if(b) return add(a+b);
    return a;
  };
}

console.log(add(4)(2)(3)(7)())