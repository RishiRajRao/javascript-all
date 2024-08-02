Array.prototype.myReduce = function (cb, initial) {
  let total = !!initial ? initial : this[0];
  console.log("in", initial, total);
  for (let i = initial ? 0 : 1; i < this.length; i++) {
    total = cb(total, this[i], i, this);
  }

  return total;
};

console.log(
  "final",
  [1, 2, 3, 4].myReduce((total, current) => current + total, 0)
);
