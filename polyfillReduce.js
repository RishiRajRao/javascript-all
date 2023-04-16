Array.prototype.myReduce = function(cb,initial){
  var res = (initial !== undefined) ? initial: this[0];
  for(let i = (initial !== undefined) ? 0 : 1 ; i<this.length ;i++){
    res = cb(res,this[i],i,this)
  }
  return res;
}


const res = ['2','2','3','4'].myReduce((total,ele)=>total + ele)
console.log("res==",res)