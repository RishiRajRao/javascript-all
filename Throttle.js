//basicaal throttle a function with wait and cb. If wait true, please with untill wait is false.Oterwise call cb and wait till settimeout expire.
const _throttle = (cb,d) => {
  let isOnHold ;
  return function(...args){
    if(isOnHold) return;
    cb(...args);
    isOnHold = true;
    setTimeout(() => {
      isOnHold = false
    }, d)
  }
}