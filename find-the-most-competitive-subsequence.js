/**
 * Check https://leetcode.com/problems/find-the-most-competitive-subsequence/
 *
 * mostCompetitive([3,5,2,6], 2) => [2,6]
 * mostCompetitive([2,4,3,3,5,4,9,6], 4) => [2,3,3,4]
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const mostCompetitive = (nums, k) => {};

[
  [[3, 5, 2, 6], 2],
  [[2, 4, 3, 3, 5, 4, 9, 6], 4],
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
