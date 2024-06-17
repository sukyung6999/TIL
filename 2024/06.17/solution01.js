function solution(n) {
  let count = 0,
    sum = 0,
    start = 1,
    end = 1;
  while (start <= n) {
    if (sum < n) {
      sum += start++;
    } else if (sum > n) {
      sum -= end++;
    } else {
      count++;
      console.log(end, start);
      sum += start++;
      sum -= end++;
    }
  }
  // return count + 1;
}
solution(15);
