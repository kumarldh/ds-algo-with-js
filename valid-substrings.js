/**
 * Check https://leetcode.com/problems/positions-of-large-groups
 * Given a string k of lower-case letters, the letters can be repeated and exist
 * consecutively. A substring from k is considered valid if it contains at least
 * three consecutive identical letters.
 * An example: k = abcdddeeeeabbbcd has three valid substrings: "ddd", "eeee",
 * and "bbb" You can identify the substring by a pair of indices [the index of
 * the first letter, the index of the last letter]. In the above example, the
 * substring "bbb" is identified by [12, 14].
 * Return the indices of the valid substrings of a given string k. Must order the
 * pairs by the start index in ascending order.
 *
 * Example 1:
 * Input: k = "abcdddeeeeaabbbcd"
 * Output: [[3, 5], [6,9], [12,14]]
 * Explanation: The large groups are "ddd", "eeee", and "bbb".
 *
 * Constraints:
 * • 1 <= k. length <= 1000
 * • k contains lower-case English letters.
 *
 */

/**
 *
 * @param {string} s
 * @returns
 */
const largeGroupPositions = (s) => {
  let result = [];
  let start = 0;
  let end = 0;

  s.split('').forEach(() => {
    end++;
    if (s[start] === s[end]) {
      return;
    } else {
      let isLargeGroup = end - start >= 3;
      if (isLargeGroup) {
        result.push([start, end - 1]);
      }
      start = end;
    }
  });

  return result;
};
[
  ['abbxxxxzzy', [[3, 6]]],
  ['abc', []],
  ['aabbc', []],
  ['aabbbc', [2, 4]],
  [
    'abcdddeeeeaabbbcd',
    [
      [3, 5],
      [6, 9],
      [12, 14],
    ],
  ],
].forEach((e, idx) => {
  console.group(`Test case #${idx + 1}`);
  const expected = e[1];
  const k = largeGroupPositions(e[0]);
  console.log(`before: largeGroupPositions('${e[0]}')
  after: ${k}
  expected: ${expected}`);
  console.groupEnd();
});
