// let res = arr.filter(cb);

Array.prototype.myFilter = function(cb){
  const res = [];
  for(let i=0;i<this.length;i++){
    if(cb(this[i],i)){
      res.push(this[i]);
    }
  }
  return res;
}

const result = [1,2,0,4,6].myFilter(el=>el>=2);
console.log(result);