/**
 * Check https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/
 *
 * removeDuplicate([1,1,1,2,2,3]) => 5
 * removeDuplicate([0,0,1,1,1,1,2,3,3]) => 7
 */

/**
 * Remove duplicates(???)
 *
 * @param {Array} nums input array
 */
const removeDuplicate = (nums) => {
  const numsLength = nums.length;
  if (numsLength === 2) return nums;
  // Start the comparison from 0th position
  let validPosition = 0;
  // Increase the count of matched element, start from 1 element
  let currentCount = 1;
  // How many copies are allowed? 2 i.e. duplicate, 3 i.e. triplicate 4 i.e. quadruplicate and so on
  const maxAllowed = 2;
  // Element at 0th index need not to be checked, start from 2nd element or index 1
  for (let i = 1; i < numsLength; i++) {
    // Compare if the current element and the element at last known index are not same
    if (nums[validPosition] !== nums[i]) {
      // Since they are not same, keep the count at 1
      currentCount = 1;
    } else {
      // Since they are same, increase the count
      currentCount = currentCount + 1;
    }

    // If the count is less than or equal to max allowed
    if (currentCount <= maxAllowed) {
      // Swap the current element and the element at last known index, and increment the last known index
      nums[++validPosition] = nums[i];
    }
  }
  return ++validPosition;
};

[
  [
    [1, 1],
    [1, 1],
  ],

  [
    [0, 1, 2, 2, 3, 3, 3, 4, 4],
    [0, 1, 2, 2, 3, 3, 4, 4],
  ],
  [
    [1, 1, 1, 2, 2, 3],
    [1, 1, 2, 2, 3],
  ],
  [
    [0, 0, 1, 1, 1, 1, 2, 3, 3],
    [0, 0, 1, 1, 2, 3, 3],
  ],
].forEach((e, idx) => {
  console.group(`Test case #${idx + 1}`);
  const nums = e[0],
    expectedNums = e[1];
  console.log(`nums before: ${nums}`);
  const k = removeDuplicate(nums);
  console.log(`nums after: ${nums} expectedNums: ${expectedNums}`);
  console.assert(
    k === expectedNums.length,
    'Expected array with %d elements, got %o',
    expectedNums.length,
    nums
  );
  expectedNums.forEach((e2, idx2) =>
    console.assert(
      expectedNums[idx2] === nums[idx2],
      'Expected %d, got %d at index %d',
      expectedNums[idx2],
      nums[idx2],
      idx2
    )
  );
  console.groupEnd();
});
