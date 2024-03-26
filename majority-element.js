/**
 * Check https://leetcode.com/problems/majority-element/
 * majorityElement([3,2,3]) => 3
 * majorityElement([2,2,1,1,1,2,2]) => 2
 *
 */

const majorityElement = (nums) => {
  const numsLength = nums.length;
  let element;
  if (numsLength === 1) {
    element = nums[0];
  } else {
    const midWay = parseInt(numsLength / 2);
    const numsMap = {};
    nums.forEach((e) => {
      if (numsMap[e]) {
        numsMap[e] = numsMap[e] + 1;
        if (numsMap[e] > midWay) element = e;
      } else {
        numsMap[e] = 1;
      }
    });
  }
  return element;
};
[
  [[10], 10],
  [[3, 2, 3], 3],
  [[2, 2, 1, 1, 1, 2, 2], 2],
  [[6, 6, 6, 7, 7], 6],
].forEach((e, idx) => {
  console.group(`Test case#${idx + 1}`);
  console.assert(
    majorityElement(e[0]) === e[1],
    `Expected ${e[1]}, got ${majorityElement(e[0])}`
  );
  console.groupEnd();
});
