function solution(n) {
  let length = [...n.toString(2)].sort((a, b) => b - a).lastIndexOf("1");
  let count = 0;
  while (true) {
    count = [...(++n).toString(2)].sort((a, b) => b - a).lastIndexOf("1");
    if (count === length) {
      console.log(n);
      return;
    }
  }
}
solution(15);
