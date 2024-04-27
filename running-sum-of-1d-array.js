/**
 * Check https://leetcode.com/problems/running-sum-of-1d-array/description/
 *
 * runningSum([1,2,3,4]) => [1,3,6,10]
 * runningSum([1,1,1,1,1]) => [1,2,3,4,5]
 */

/**
 * Running sum of 1d array.
 *
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = (nums) => {
  const expectedNums = [];
  nums.forEach((e, idx) => {
    expectedNums.push(e + (expectedNums[idx - 1] || 0));
  });
  return expectedNums;
};

[
  [
    [1, 2, 3, 4],
    [1, 3, 6, 10],
  ],

  [
    [1, 1, 1, 1, 1],
    [1, 2, 3, 4, 5],
  ],
  [
    [3, 1, 2, 10, 1],
    [3, 4, 6, 16, 17],
  ],
].forEach((e, idx) => {
  console.group(`Test case #${idx + 1}`);
  const nums = e[0],
    expectedNums = e[1];
  const k = runningSum(nums);
  console.log(`nums before: ${nums}
  nums after: ${k}
  expectedNums: ${expectedNums}`);
  expectedNums.forEach((e2, idx2) =>
    console.assert(
      expectedNums[idx2] === k[idx2],
      'Expected %d, got %d at index %d',
      expectedNums[idx2],
      k[idx2],
      idx2
    )
  );
  console.groupEnd();
});
