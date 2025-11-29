/**
 * Bubble Sort Algorithm
 * 
 * Bubble Sort is a simple comparison-based sorting algorithm. It works by repeatedly
 * stepping through the list, comparing adjacent elements and swapping them if they are
 * in the wrong order. This process is repeated until the list is sorted.
 * 
 * Although Bubble Sort is not efficient for large datasets (average and worst-case time
 * complexity is O(n^2)), it is easy to understand and implement, making it useful for
 * educational purposes and small datasets.
 */

// Time Complexity: O(n^2)
// Space Complexity: O(1)

function bubbleSort(nums) {
    let n = nums.length;
    let didSort = false;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (nums[j] > nums[j + 1]) {
                let temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp
            }
        }

        if (!didSort) break;
    }

    return nums
}


// Case 1: Random unsorted array
let nums1 = [5, 2, 4, 1];
let result1 = bubbleSort([...nums1]);
console.log(`Case 1 - Before: ${nums1} && After: ${result1}`);

// Case 2: Already sorted array
let nums2 = [1, 2, 3, 4, 5];
let result2 = bubbleSort([...nums2]);
console.log(`Case 2 - Before: ${nums2} && After: ${result2}`);

// Case 3: Reverse sorted array
let nums3 = [9, 7, 5, 3, 1];
let result3 = bubbleSort([...nums3]);
console.log(`Case 3 - Before: ${nums3} && After: ${result3}`);

// Case 4: Array with all equal elements
let nums4 = [4, 4, 4, 4];
let result4 = bubbleSort([...nums4]);
console.log(`Case 4 - Before: ${nums4} && After: ${result4}`);

// Case 5: Empty array
let nums5 = [];
let result5 = bubbleSort([...nums5]);
console.log(`Case 5 - Before: ${nums5} && After: ${result5}`);

// Case 6: Single element array
let nums6 = [10];
let result6 = bubbleSort([...nums6]);
console.log(`Case 6 - Before: ${nums6} && After: ${result6}`);

// Case 7: Array with negative numbers
let nums7 = [3, -2, -5, 0, 1];
let result7 = bubbleSort([...nums7]);
console.log(`Case 7 - Before: ${nums7} && After: ${result7}`);

// Case 8: Array with duplicates
let nums8 = [3, 5, 3, 2, 2, 1];
let result8 = bubbleSort([...nums8]);
console.log(`Case 8 - Before: ${nums8} && After: ${result8}`);