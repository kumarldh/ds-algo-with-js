/**
 * Check https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/
 *
 * numberOfSteps(14) => 6
 * numberOfSteps(8) => 4
 */

/**
 * @param {number} num
 * @return {number}
 */
const numberOfSteps = function (num) {};

[
  [14, 6],
  [8, 4],
  [123, 12],
].forEach((e, idx) => {
  console.group(`Test case #${idx + 1}`);
  const nums = e[0],
    expectedNums = e[1];
  const k = numberOfSteps(nums);
  console.log(`before: ${nums}
  after: ${k}
  expecte: ${expectedNums}`);
  console.groupEnd();
});
