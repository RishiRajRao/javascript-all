const multiply = (...args) => {
  // const finalArr = [...a, ...b, ...c];
  return args.reduce((acc, val) => acc * val, 1);
};

const getCurryMultiple = (cb) => {
  return (...argsA) => {
    return (...argsB) => {
      return (...argsC) => {
        const result = [...argsA, ...argsB, ...argsC];
        return cb(...result);
      };
    };
  };
};

const curriedMultiply = getCurryMultiple(multiply);

const final = curriedMultiply(3, 4)(2)(5, 7);

console.log("final==", final);
