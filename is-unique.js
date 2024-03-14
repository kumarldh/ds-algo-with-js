/**
 * Implement an algorithm to determine if a string has all unique characters.
 * isUnique("Hello World!") => false
 * isUnique("aeiou") => true
 */

/**
 * Determine if a string has all unique characters
 *
 * @param {string} str input string
 * @returns Boolean
 */
const isUnique = (str) => {
  return new Set(str.split('')).size === str.length;
};

['Hello World!', 'aeiou', 'Kumar', 'Chetan', 'Sharma'].forEach((e) =>
  console.log(`isUnique('${e}') => ${isUnique(e)}`)
);
