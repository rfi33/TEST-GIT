function cubeOdd(arr) {

  if (arr.some((element) => typeof element == "string")) {
    return undefined;
  }

  return arr.filter((number) => number % 2 !== 0).map((number) => number**3).reduce((a, b) => a + b, 0);
}