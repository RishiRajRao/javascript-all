// const val = arr.map((el,idx,arr)=>el*2)

Array.prototype.myMap = function(cb){
  const res = []
  for(let i=0;i<this.length;i++){
    res[i] = cb(this[i],i,this)
  }
  return res;
}

let result = [1,2,3,4].myMap((el,idx)=>el*idx);
console.log(result);