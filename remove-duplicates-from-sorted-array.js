/**
 * Check https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
 * removeDuplicates([1,1,2]) => 2
 */

const removeDuplicates = (nums) => {
  const numsSet = new Set(nums);
  [...numsSet].forEach((e, idx) => {
    nums[idx] = e;
  });
  return numsSet.size;
};

[
  [
    [1, 1, 2],
    [1, 2],
  ],
  [
    [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],
    [0, 1, 2, 3, 4],
  ],
].forEach((e) => {
  const nums = e[0],
    expectedNums = e[1];
  const k = removeDuplicates(nums);
  console.assert(k === expectedNums.length);
  console.log(nums);
});
