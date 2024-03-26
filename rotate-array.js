/**
 * Check https://leetcode.com/problems/rotate-array/
 * rotate([1,2,3,4,5,6,7], 3) => [5,6,7,1,2,3,4]
 *
 */

const rotate = (nums, k) => {
  const numsLength = nums.length;
  const movedToLeft = nums.splice(0, numsLength - k);
  //nums.splice(0, numsLength - k).concat([...movedToLeft]);
  return movedToLeft.concat();
};

[
  [[1, 2, 3, 4, 5, 6, 7], 3, [5, 6, 7, 1, 2, 3, 4]],
  [[-1, -100, 3, 99], 2, [3, 99, -1, -100]],
].forEach((e, idx) => {
  console.group(`Test case #${idx + 1}`);
  rotate(e[0], parseInt(e[1]));
  console.log(e[0]);
  console.groupEnd();
});
