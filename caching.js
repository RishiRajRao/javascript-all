
const memoize = () => {
  var cache = {}
   return (val) => {
    if(!cache[val]){
      cache[val] = val *10
      console.log("caching",cache)
      return cache[val]
    }else{
      console.log("cached",cache)
      return cache[val]
    }
   }
}

const getProduct = memoize()
getProduct(10)
getProduct(10)
getProduct(10)
getProduct(10)
getProduct(20)
getProduct(20)

// function memoizedAddTo256(){
//   var cache = {};

//   return function(num){
//     if(cache[num]){
//       console.log("cached value",cache);
//       return cache[num]
//     }
//     else{
//       console.log("cacheing",cache);
//       cache[num] = num + 256;
//       return cache[num];
//     }
//   }
// }
// var memoizedFunc = memoizedAddTo256();

// memoizedFunc(20); // Normal return
// memoizedFunc(20);
// memoizedFunc(20);
// memoizedFunc(10);
// memoizedFunc(10);