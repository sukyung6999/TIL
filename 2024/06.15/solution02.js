function solution(strings, n) {
  return strings.sort((a, b) => {
    if (a.charCodeAt(n) === b.charCodeAt(n)) {
      return a < b ? -1 : 1;
    } else {
      return a.charCodeAt(n) - b.charCodeAt(n);
    }
  });
}
solution(["abce", "abcd", "cdx"], 2);
