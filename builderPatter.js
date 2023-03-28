

// const result = calc.add(10).multiply(10).substract(5).add(1);

// console.log(result.total)

const calc =  {
  
 total:0,

  add(value){
     this.total += value
     return this;
  },

  multiply(value){
     this.total *= value
     return this;
  },

  substract(value){
     this.total -= value
     return this;
  }

}

// const calc = new Result()
const result = calc.add(10).multiply(10).substract(5).add(1);
console.log(result.total)