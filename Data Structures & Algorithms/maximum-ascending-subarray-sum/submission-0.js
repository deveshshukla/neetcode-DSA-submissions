class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxAscendingSum(nums) {
        let maxSum = nums[0]; // Handle single-element arrays
        let currentSum = nums[0];

        for (let i = 1; i < nums.length; i++) {
            if (nums[i] > nums[i - 1]) {
                currentSum += nums[i];
            } else {
                maxSum = Math.max(maxSum, currentSum);
                currentSum = nums[i]; // Reset to the current element
            }
        }

        // Final check to capture the last subarray
        return Math.max(maxSum, currentSum);
    }
}
