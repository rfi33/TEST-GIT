function count(string) {
  const allChar = [];
  const result = {};

  for (const char of string) {
    if (!allChar.includes(char)) {
        allChar.push(char);
    }
  }

  for (const char of allChar) {
    result[char] = 0;

    for (const charInString of string) {
      if (char == charInString) {
        result[char] += 1;
      }
    }
  }
  return result;
}
console.log(count("aba"));
