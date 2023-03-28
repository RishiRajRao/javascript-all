//@change = _debounce(text), Basically debounce return a function  with the cb called in setTimeout.

const _debounce = (cb,d) => {
  let timer;
  return function(...args) {
    if(timer) clearTimeout(timer);
    timer = setTimeout(()=>{
      cb(...args);
    },d)
  }
}


//<input onChange={handleChange}/>--->const handleChange=_debounce((e)=>console.log(e),1000)