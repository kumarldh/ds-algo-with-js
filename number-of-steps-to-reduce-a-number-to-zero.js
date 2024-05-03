/**
 * Check https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/
 *
 * numberOfSteps(14) => 6
 * numberOfSteps(8) => 4
 */

/**
 * Util/helper for determining if a number is even.
 *
 * @param {number} number
 * @returns
 */
const isEven = (number) => number % 2 === 0;
/**
 * @param {number} num
 * @return {number}
 */
const numberOfSteps = function (num) {
  // Already 0
  if (num === 0) {
    return num;
  }
  return 1 + (isEven(num) ? numberOfSteps(num / 2) : numberOfSteps(num - 1));
};

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
  expected: ${expectedNums}`);
  console.groupEnd();
});
