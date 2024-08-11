const flatArrWithDepth = (arr, depth) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && depth > 0) {
      result.push(...flatArrWithDepth(arr[i], --depth));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
};

console.log(flatArrWithDepth([1, 2, 9, [5, 7, 8, 0, [11, 12]], 40], 1));
