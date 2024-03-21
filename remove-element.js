/**
 * Check https://leetcode.com/problems/remove-element/
 *
 * removeElement([3,2,2,3], 3) => 2
 * removeElement([0,1,2,2,3,0,4,2], 2) => 5
 *
 */

const removeElement = (nums, val) => {
  let output = nums.length;
  nums.forEach((num, idx) => {
    if (num === val) {
      nums[idx] = 'Z';
      output--;
    }
  });
  nums.sort();
  return output;
};

[
  [[0, 1, 2, 2, 3, 0, 4, 2], 2, [0, 1, 4, 0, 3]],
  [[3, 2, 2, 3], 3, [2, 2]],
].forEach((e) => {
  const nums = e[0],
    val = e[1],
    expectedNums = e[2];
  const k = removeElement(e[0], e[1]);
  console.assert(k === expectedNums.length);
  console.log(nums);
  console.log(
    `removeElement([${e[0]}], ${e[1]}]) => ${removeElement(e[0], e[1])}`
  );
});
