//basicaal throttle a function with wait and cb. If wait true, please with untill wait is false.Oterwise call cb and wait till settimeout expire.
const _throttle = (cb,d) => {
  let isWait ;
  return function(...args){
    if(isWait) return;
    cb(...args);
    isWait = true;
    setTimeout(() => {
      isWait = false
    }, d)
  }
}