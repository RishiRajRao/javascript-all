function add(val){
  return val += 2
}

function subtact(val){
  return val -= 3
}

function multiply(val){
  return val *= 4
}

// const evaluate = compose(add,subtact,multiply)

// console.log(evaluate(5))

function compose(...args){
  return (val) => {
    // return args.reduceRight((arg, fn) => fn(arg),val)
    let total = val;
    for(let j = args.length - 1; j >= 0; j--){
      total = args[j](total)
    }
    return total
  }
}

const evaluate = compose(add,subtact,multiply)

console.log(evaluate(5))
// function evaluate(val){

// }