class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    isArraySpecial(nums) {
        // Edge case
        if (nums.length === 1) return true;

        for (let i = 1; i < nums.length; i++) {
            let a = nums[i - 1] % 2;
            let b = nums[i] % 2;

            // both odd
            if (a !== 0 && b !== 0) return false;
            // both even
            if (a === 0 && b === 0) return false;
        }
        return true;
    }
}
