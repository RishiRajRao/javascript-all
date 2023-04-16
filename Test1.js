const _debounce = function(cb,delay){
  let timer;
  return (...args) => {
    if(timer)clearTimeout(timer);
    timer = setTimeout(()=>cb(...args),delay);
  }
}


const _throttle = function(cb,delay){
  let isWaiting;
  return (...args) => {
    if(isWaiting)return;
    cb(...args)
    isWaiting = true
    setTimeout(()=>isWaiting = false,delay)
  }
}





