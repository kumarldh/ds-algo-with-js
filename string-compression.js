/**
 * Implement a method to perform basic string compression using the counts
 * of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the
 * "compressed" string would not become smaller than the original string, your method should return
 * the original string. You can assume the string has only uppercase and lowercase letters (a - z).
 *
 * compressString('aabcccccaaa') => 'a2blc5a3'
 */

/**
 *
 * @param {string} str
 * @returns
 */
const compressString = (str) => {
  let out = '';
  const splitStr = str.split('').forEach((e, idx) => {
    if (idx > 0) {
      out = out + str[idx];
    }
  });
  return out;
};

['aabcccccaaa', 'aashna'].forEach((e) =>
  console.log(`compressString('${e}') => '${compressString(e)}'`)
);
