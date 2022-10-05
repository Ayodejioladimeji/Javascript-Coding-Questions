/*
    FIRST METHOD

    Steps for the solutions

    1. Use RegExp pattern to search the string argument for the patter a...b
    2. If you find it, return true
    3. Else if you dont find it, return false


*/

const ABCheck = (str) => {
  const res = str.search("a...b");
  //   Note : The search() method returns the position of the match

  if (res === -1) {
    return "false";
  } else {
    return "true";
  }
};

const result = ABCheck("lane borrowed");
console.log(result);
