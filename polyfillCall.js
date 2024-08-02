Function.prototype.myCall = function (obj, ...args) {
  let fn = this;

  if (typeof fn !== "function") {
    throw new Error("Argument must be a function");
  }

  obj.myFun = this;
  return obj.myFun(...args);
};
