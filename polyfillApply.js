Function.prototype.myApply = function (context, args) {
  if (typeof this !== "Function") {
    throw new Error("Argument must be a function");
  }

  if (!Array.isArray(args)) {
    throw new Error("Argument must be an array");
  }

  context.fn = this;
  return context.fn(...args);
};
