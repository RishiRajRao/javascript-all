const delayedPrint = async ()=>{
  for(let i=1;i<=10;i++){
    const j = await new Promise((resolve, reject)=>{
      setTimeout(()=>{resolve(i)},i * 1000)
    })
    console.log(j);
  }
}

// delayedPrint();


function delayedPrint(){
  for(let i=1,p = Promise.resolve();i<=10;i++){
   p =  p.then(()=>new Promise((resolve,reject)=>{
      setTimeout(()=>{resolve('t')},i*1000);
    }).then((t)=>{console.log(i,t)}));
  }
}

// delayedPrint()

