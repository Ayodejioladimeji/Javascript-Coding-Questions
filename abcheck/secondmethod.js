/**
    SECOND METHOD

    Steps for the solution

    1. Iterate through the params 
    2. Write a condition to check if a is present and the next 4 items to a is b
    3. return the string true if the condition is true
    4. Else return the string false if the condition is false


 */

const ABCheck = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a" && str[i + 4] === "b") {
      return "true";
    } else if (str[i] === "a" && str[i + 4] !== "b") {
      return "false";
    } else {
      // do nothing
    }
  }
};

const result = ABCheck("lane borrowed");
console.log(result);
