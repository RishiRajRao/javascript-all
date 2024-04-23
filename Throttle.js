const _throttle = (cb, delay) => {
  let isTimer = false;
  return (val) => {
    if (isTimer) return;
    else {
      isTimer = true;
      cb(val);
      setTimeout(() => (isTimer = false), delay);
    }
  };
};

const printLog = (val) => console.log("val", val);

const _throttlePrint = _throttle(printLog, 10);
_throttlePrint(10);
_throttlePrint(20);
_throttlePrint(30);
_throttlePrint(40);
_throttlePrint(50);
