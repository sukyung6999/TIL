function maxSubarraySum(arr, num){
  // add whatever parameters you deem necessary - good luck!
  if (arr.length < num) return null;
  
  let sum = 0;
  for (let i = 0; i < num; i++){
      sum += arr[i];
  }
  let newSum = sum;
  for (let i = 1; i <= arr.length - num; i++){
    newSum -= arr[i - 1];
    newSum += arr[i + num - 1];
    sum = Math.max(newSum, sum);
    console.log(sum);
  }
  // return sum;
}
maxSubarraySum([-3,4,0,-2,6,-1], 2)