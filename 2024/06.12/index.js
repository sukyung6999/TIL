// 문제 1
// const isOdd = val => val % 2 !== 0;
// function someRecursive(arr, func){
//   // add whatever parameters you deem necessary - good luck!
//   if(arr.length === 0) return false;
//   if (func(arr[0])) {
//       return true;
//   } else {
//       return someRecursive(arr.slice(1), func);
//   }
// }

// someRecursive([4,6,8,9], isOdd)

// 문제 2
function flatten([first, ...rest]){
  // add whatever parameters you deem necessary - good luck!
  console.log(...rest);
  if (first === '') return;
  if (typeof first === 'object') return flatten(...rest);
  return [first, ...flatten(...rest)];
}
flatten([1, [2, [3, 4], [[5]]]])