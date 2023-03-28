

function myPromiseAll(taskList) {
  //to store results 
  const results = [];
  
  //to track how many promises have completed
  let promisesCompleted = 0;

  // return new promise
  return new Promise((resolve, reject) => {

    taskList.forEach((promise, index) => {
     //if promise passes
      promise.then((val) => {
        //store its outcome and increment the count 
        results[index] = val;
        promisesCompleted += 1;
        
        //if all the promises are completed, 
        //resolve and return the result
        if (promisesCompleted === taskList.length) {
          resolve(results)
        }
      })
         //if any promise fails, reject.
        .catch(error => {
          reject(error)
        })
    })
  });
}
const allPromises = promises => {
  let result = [], promisesCompleted = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((p,idx)=>{
      p.then((res) => {
        // result.push(res)
        result[idx] = res;
        promisesCompleted += 1;
        if(promisesCompleted === promises.length){
          resolve(result)
        }
      }).catch(err=>reject(err))
    })
})}

const test1 = new Promise((resolve, reject) => {
  setTimeout(() =>resolve('test1'),3000)
});
const test2 = new Promise((resolve, reject) => {
  setTimeout(() =>resolve('test2'),2000)
});


allPromises([test1,test2]).then((res) => console.log(res))
//basically taking all promises and storing all single promises in an array and when it reaches last element resolve the result as one big outer promises. If during any one particular resolution it goes wrong instantly reject for outer promise.
//Hence outer function return array of promises.