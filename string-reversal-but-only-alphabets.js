/**
 * Reverse a string but only alphabets, special chars retain there places.
 * ```
 * fnReverseOnlyChars("he-llo-wor-ld") = dl-row-oll-eh
 * fnReverseOnlyChars("une-dos-tres") = ser-tso-denu
 * ```
 */

/**
 *
 * @param {string} str input string
 * @returns string
 */
const fnReverseOnlyChars = (str) => {
  const everyThingExceptAlphaRegex = /[^a-zA-Z]+/g;
  const reversedStr = str
    .replace(everyThingExceptAlphaRegex, '') // replace all special chars
    .split('') //split
    .reverse(); //reverse

  // Find all special chars
  [...str.matchAll(everyThingExceptAlphaRegex)].forEach((e) => {
    reversedStr.splice(Number(e.index), 0, e[0]);
  });

  return reversedStr.join(''); //Join and return
};
console.log('he-llo-wor-ld');
console.log(fnReverseOnlyChars('he-llo-wor-ld'));
console.log(fnReverseOnlyChars('Une-Dos-Tres'));
console.log(fnReverseOnlyChars('Numb3r#1'));
