const person = {
  firstName: 'John',
  lastName: 'wallace',
   get getFullName(){
    return `${this.firstName} ${this.lastName}`
  },
  set setFullName(first) {
    this.firstName = first.split(' ')[0]
    this.lastName = first.split(' ')[1]
  }
}


person.setFullName = 'Rishi raj'

console.log(person.getFullName)

