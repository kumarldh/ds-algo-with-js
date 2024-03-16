/**
 * There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.
 * oneAway('pale', 'ple') -> true
 * oneAway('pales', 'pale') -> true
 * oneAway('pale', 'bale') -> true
 * oneAway('pale', 'bake') -> false
 *
 */

/**
 *
 * @param {string} str1
 * @param {string} str2
 * @returns Boolean
 */
const oneAway = (str1, str2) => {
  const sortedStr1 = str1.split('').sort();
  const sortedStr2 = str2.split('').sort();
  // possible replacement
  if (
    str1.length === str2.length || // possible replacement
    str2.length - 1 === str1.length || // possible deletion
    str2.length + 1 === str1.length // possible addition
  ) {
    const filteredArr = sortedStr1.filter((e) => !sortedStr2.includes(e));
    return filteredArr.length === 1;
  }
  return false;
};
[
  ['pale', 'plea'],
  ['pale', 'ale'],
  ['pale', 'pke'],
  ['pales', 'pale'],
  ['pale', 'bale'],
  ['pale', 'bake'],
  ['cake', 'bake'],
].forEach((e) =>
  console.log(`oneWay('${e[0]}', '${e[1]}') -> ${oneAway(e[0], e[1])}`)
);
