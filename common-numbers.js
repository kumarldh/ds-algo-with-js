/**
 * Create a program that takes in two sets of integers, "setl" and "set2", and
 * returns a new set that contains only the integers that are present in both the
 * sets. The no. of times an integer is present in both the sets should be the no.
 * of times it is present in the resultant set as well. i»¿The order of the
 * integers in the result set should be in ascending order.
 *
 * Example 1:
 * Input: set1 = [12,11,11,12], set2 = [12,12]
 * Output: [12,12]
 *
 * Example 2:
 * Input: set1 = [14,19,15,14], set2 = [19,14,19,18,14]
 * Output: [14,19,14]
 * Explanation: [19,14,14] or [14,14,19] is also accepted.
 *
 */

/**
 *
 * @param {number[]} a1
 * @param {number[]} a2
 * @returns {number[]}
 */
const commonNumbers = (a1, a2) => {
  const s1 = new Set(a1);
  const s2 = new Set(a2);
  const result = [];
  s1.forEach((e) => {
    if (s2.has(e)) result.push(e);
  });
  s2.forEach((e) => {
    if (s1.has(e)) result.push(e);
  });
  return result;
};

[
  [
    [12, 11, 11, 12],
    [12, 12],
    [12, 12],
  ],
  [
    [14, 19, 15, 14],
    [19, 14, 19, 18, 14],
    [14, 19, 14],
  ],
].forEach((e, idx) => {
  console.group(`Test case #${idx + 1}`);
  const nums = e[0],
    expectedNums = e[2];
  const k = commonNumbers(e[0], e[1]);
  console.log(`before: commonNumbers([${nums}], [${e[1]}])
  after: ${k}
  expected: ${expectedNums}`);
  console.groupEnd();
});
