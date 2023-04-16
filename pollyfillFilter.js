

Array.prototype.myFilter = function(cb){
  let res = []
  for(let i = 0; i< this.length;i++){
    if(cb(this[i],i,this))
      res.push(this[i])
  }
  
  return res;
}


const res = [1,2,3,4].myFilter((ele)=>ele>2)
console.log("res=",res)

//Hey wow this is amazing thing to write on the extended code setup. what I like is the way I am seeing this screen. so facinating to be honest.
// Hey I once told my friend to give me the best screen possible and he suggested to get this MSI screen. I am totally in love with this things.s