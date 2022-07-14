async function getAll(){
  const urls = ['https://jsonplaceholder.typicode.com/todos/1','https://jsonplaceholder.typicode.com/todos/2']
  const requests = urls.map(url=>fetch(url));
  const responses = await Promise.all(requests);
  const resJSON = await Promise.all(responses.map(r => r.json()));
  resJSON.map(data=>console.log(data))
}

getAll()

// example of 'all or nothing' promise.all function




const test1 = new Promise((resolve, reject) => {
  setTimeout(() =>resolve(1),1000)
});
const test2 = new Promise((resolve, reject) => {
  setTimeout(() =>reject(new Error('oops!')),2000)
});
const test3 = new Promise((resolve, reject) => {
  setTimeout(() =>resolve(2),3000)
});

(async () => {
  try{
    const allData =await Promise.all([test1,test2,test3]);
    console.log(allData);
  }catch(err){
    console.log('err...',err);
  }
})();