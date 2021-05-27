const isAValidString = (text) => {
  if (typeof text === "string" && text !== "") return true;
  return false;
};

const palindromeChecker = (text) => {
  if (isAValidString(text)) {
    text = text.toLowerCase();
    let newVal = text.toLowerCase("").split("").reverse().join("");
    /* if (isAValidString(text)) { */
    return text === newVal;
    /* } */
  }
};

console.log(palindromeChecker("Wow"));
