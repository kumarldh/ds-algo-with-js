/**
 *
 * @param {string} str
 */
const lengthOfLongestSubstring = (str) => {
  const strLength = str.length;
  let startIndex = 0;
  let stopIndex = 0;
  let m = new Map();
  for (let i = 0; i < strLength; i++) {
    console.log(`i = ${i}, str[i] = ${str[i]}`);
    if (!m.has(str[i])) {
      console.log(
        `not found in Map m, setting ${str[i]} at ${i} in Map `,
        ...m.values()
      );
      m.set(str[i], i);
    } else {
      const indexAtWhichThisCharExistsInSet = m.get(str[i]);
      console.log(
        `Found in Map m at ${indexAtWhichThisCharExistsInSet} at ${i} in Map `,
        ...m.values()
      );
    }
  }
  //console.log([startIndex, stopIndex, m.size, ...m.keys(), ...m.values()]);
};
//const tcs = ["abcabcbb", "bbbb", "pwwkew", "ABDEFGABEF", "GEEKSFORGEEKS"];
const tcs = ['abcabcbb'];
tcs.forEach((s) => lengthOfLongestSubstring(s));
//[abc] [b] [wke, kew] [abdefg, BDEFGA, DEFGAB,], [eksforg, ksforge]
