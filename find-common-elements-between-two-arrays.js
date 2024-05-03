/**
 * Check https://leetcode.com/problems/find-common-elements-between-two-arrays
 *
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const findIntersectionValues = (nums1, nums2) => {
  const s1 = new Set(nums1);
  const s2 = new Set(nums2);
  const result = new Set();
  s1.forEach((e) => {
    if (s2.has(e)) result.add(e);
  });
  s2.forEach((e) => {
    if (s1.has(e)) result.add(e);
  });
  console.log(Array.from(result));
  return result.size ? Array.from(result) : [0, 0];
};

[
  [
    [4, 3, 2, 3, 1],
    [2, 2, 5, 2, 3, 6],
    [3, 4],
  ],
  [
    [3, 4, 2, 3],
    [1, 5],
    [0, 0],
  ],
].forEach((e, idx) => {
  console.group(`Test case #${idx + 1}`);
  const nums = e[0],
    expectedNums = e[2];
  const k = findIntersectionValues(e[0], e[1]);
  console.log(`before: findIntersectionValues([${nums}], [${e[1]}])
  after: ${k}
  expected: ${expectedNums}`);
  console.groupEnd();
});
