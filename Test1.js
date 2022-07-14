const rejectHandler = reason => ({ status: 'rejected', reason });
const resolveHandler = value => ({ status: 'fulfilled', value });
const promise1 = new Promise((resolve,reject)=>{
  resolve(1)
});
(async () => {
  const value = await Promise.resolve(promise1);
  if(value instanceof Error) {
    var val = rejectHandler(value)
  }
  else{
    val = resolveHandler(value)
  }
  console.log(val)
})();
// .then(resolveHandler,rejectHandler).then(data => console.log(data))

