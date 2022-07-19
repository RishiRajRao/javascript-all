const papa = {
  name:'rishi',
  final:function(){
    const test1 = () =>{
      console.log(this.name)
    }    
    test1();
  }
}

const test2={
  name:'rishu',
}
papa.final.call(test2)



////////////////////////////////
// arrow function doesn't create any execution context hence it depends on its outer context i.e the outer function/object which has called arrow inside it.After the function/object called start looking for the property and if not gotten,look through scope chain.change 'final' ref to an arrow function.