function findName(name){
  this.name = name
  return  {
    name: 'John',
    display :() => {
      console.log(this.name)
    }
  }
}

// const Person = {
//   name: 'John',
//   display() {
//     console.log(this.name)
//   }
// }
const p1 = findName('Rishi')
p1.display()