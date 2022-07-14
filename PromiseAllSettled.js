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
    const allData =await Promise.allSettled([test1,test2,test3]);
    allData.map(data=>data.status=='fulfilled' ? console.log(data.value) :'')
  }catch(err){
    console.log('err...',err);
  }
})();
