const test1 = new Promise((resolve, reject) => {
  setTimeout(() =>resolve('test1'),3000)
});
const test2 = new Promise((resolve, reject) => {
  setTimeout(() =>resolve('test2'),2000)
});

(async () => {
  const [test11,test22] = await Promise.all([test1,test2]);
  console.log(test11,test22);
})();

(async()=>{
  const [test11,test22] = await Promise.all([test1,test2])
  console.log(test11,test22)
})();

Promise.all([test1, test2]).then(([test1,test2])=>console.log(test1,test2))