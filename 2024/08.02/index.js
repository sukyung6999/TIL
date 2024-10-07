function flatArr(flattenArr, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'object') {
      flatArr(flattenArr, arr[i]);
    } else {
      flattenArr.push(arr[i]);
    }
  }
  return flattenArr;
}
function flatten(arr) {
  const flattenArr = [];
  // add whatever parameters you deem necessary - good luck!
  return flatArr(flattenArr, arr);
}
flatten([1, 2, 3, [4, 5]]); // [1, 2, 3, 4, 5]
flatten([1, [2, [3, 4], [[5]]]]); // [1, 2, 3, 4, 5]
flatten([[1], [2], [3]]); // [1,2,3]
flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]); // [1,2,3
