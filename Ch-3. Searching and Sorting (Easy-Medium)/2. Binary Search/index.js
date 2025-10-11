/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);

        if (nums[middle] == target) {
            return middle;
        }

        if (nums[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }

    }

    return -1;
};

// Case 1:
// Input:
const nums1 = [-1, 0, 3, 5, 9, 12];
const target1 = 9
// Expected Output: 4
const result1 = search(nums1, target1)
console.log(result1 == -1 ? `Element ${target1} does not exists in ${nums1}` : `Element ${target1} exists at ${result1} place in ${nums1}`)

// TODO: ADD MORE CASES and OUTPUT for the same. Working on old laptop which does not have any setup soo ehhhh