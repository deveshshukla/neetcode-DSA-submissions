class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    subsetXORSum(nums) {
        let orSum = 0;
    
        // Step 1: Find the bitwise OR of all elements
        for (let i = 0; i < nums.length; i++) {
            orSum |= nums[i];
        }
        
        // Step 2: Multiply by 2^(n-1) using a left shift
        return orSum << (nums.length - 1);
    }
}
