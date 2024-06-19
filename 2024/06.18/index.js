function flatten(arr) {
  // add whatever parameters you deem necessary - good luck!
  if (!arr[0]) return;
  if (typeof arr[0] === "object") {
    return flatten(arr[0]), flatten(arr.slice(1));
  } else {
    const temp = [arr[0], flatten(arr.slice(1))];
    console.log(temp);
    return temp;
  }
}
flatten([[1], [2], [3]]);
