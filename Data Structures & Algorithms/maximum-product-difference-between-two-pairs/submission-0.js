class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProductDifference(nums) {
        // Use Sorting
        nums.sort((a, b) => a - b);
        let firstTwo = nums[0] * nums[1];
        let lastTwo = nums[nums.length - 1] * nums[nums.length - 2];
        return lastTwo - firstTwo;
    }
}
