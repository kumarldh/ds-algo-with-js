/**
 * The classical swap variables program
 */

/**
 * Using temporary variable is the best approach...
 */
let a = 'Hello',
  b = 'World!';
console.info(`Before swapping a=${a} and b=${b}`);
let temporary = '';
temporary = a;
a = b;
b = temporary;
console.info(`After swapping a=${a} and b=${b}`);

/**
 * ES6+ approach...JS Bros claim it to be as fast as temporary variable approach.
 */
let c = 'Hello',
  d = 'World!';
console.info(`Before swapping ES6  c=${c} and d=${d}`);
[c, d] = [d, c];
console.info(`ES6 array destructuring in c=${c} and b=${d}`);
