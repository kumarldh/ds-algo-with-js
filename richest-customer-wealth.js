/**
 * Check https://leetcode.com/problems/richest-customer-wealth/description/
 *
 * maximumWealth([[1,2,3],[3,2,1]]) => 6
 * maximumWealth([[1,5],[7,3],[3,5]]) => 10
 */

/**
 * @param {number[][]} accounts
 * @return {number}
 */
const maximumWealth = (accounts) => {
  const wealthArray = [];
  accounts.forEach((account) => {
    let initialValue = 0;
    const wealth = account.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    );
    wealthArray.push(wealth);
  });
  wealthArray.sort((a, b) => b - a);
  return wealthArray[0];
};

[
  [
    [
      [1, 2, 3],
      [3, 2, 1],
    ],
    6,
  ],
  [
    [
      [1, 5],
      [7, 3],
      [3, 5],
    ],
    10,
  ],
  [
    [
      [2, 8, 7],
      [7, 1, 3],
      [1, 9, 5],
    ],
    17,
  ],
].forEach((e, idx) => {
  console.group(`Test case #${idx + 1}`);
  const nums = e[0],
    expectedNums = e[1];
  const k = maximumWealth(nums);
  console.log(`nums before: ${nums}
nums after: ${k}
expected: ${expectedNums}`);
  // expectedNums.forEach((e2, idx2) =>
  //   console.assert(
  //     expectedNums[idx2] === k[idx2],
  //     'Expected %d, got %d at index %d',
  //     expectedNums[idx2],
  //     k[idx2],
  //     idx2
  //   )
  // );
  console.groupEnd();
});
