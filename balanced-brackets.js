/**
 * Open brackets must be closed by the same type of brackets. Open brackets must be closed in the correct order.
 *
 * checkBrackets('[]') => true
 * checkBrackets('[{}]') => true
 * checkBrackets('((]}))') => false
 *
 */

/**
 * check if brackets are balanced or not
 *
 * @param {string} str string containing brackets and only brackets
 * @returns {boolean} true or false
 */
const checkBrackets = (str) => {
  //Pairs mean even, in case string length is odd, return false immediately
  if (str.length % 2 !== 0) return false;
  const bracketsStack = [];
  str.split('').forEach((e) => {
    const lastBracketInStack = bracketsStack[bracketsStack.length - 1];
    if (e === '(' || e === '{' || e === '[') {
      bracketsStack.push(e);
    } else if (
      (e === ')' && lastBracketInStack === '(') ||
      (e === '}' && lastBracketInStack === '{') ||
      (e === ']' && lastBracketInStack === '[')
    ) {
      bracketsStack.pop();
    }
  });
  return !bracketsStack.length || false;
};

['[]', '()', '{}', '(){}[]', '({[]}}', '{{{}}}}', '{([{([])}])}'].forEach((e) =>
  console.log(`checkBrackets('${e}') => ${checkBrackets(e)}`)
);
