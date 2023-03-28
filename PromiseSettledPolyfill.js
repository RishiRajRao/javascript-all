const urls = ['https://jsonplaceholder.typicode.com/todos/1','https://jsonplaceholder.typicode.com/todos/2']
const requests = urls.map(url=>fetch(url));

const customPromiseSettled =(promises) => {
  if (!Promise.allSettleded) {
  const rejectHandler = reason => ({ status: 'rejected', reason });
  const resolveHandler = value => ({ status: 'fulfilled', value });
  const convertedPromises = promises.map(p => Promise.resolve(p).then(res=>res.json()).then(resolveHandler, rejectHandler));
  return Promise.all(convertedPromises);
}
}

customPromiseSettled(requests).then(data=>console.log(data));

//using await decent version


// const customPromiseSettled =(promises) => {
//   if(!Promise.allSettleded) {
//     const rejectHandler = reason => ({status:'rejected',reason:reason});
//     const resolveHandler = value => ({status:'fulfilled',value:value});
//     const modifiedPromises = promises.map(async p => {
//       const temp = await Promise.resolve(p)
//       if(temp instanceof Error) return rejectHandler(temp)
//       return resolveHandler(temp)
//     })
//     Promise.all(convertedPromises)
//   }
// }

// customPromiseSettled(requests).then(data=>console.log(data));

