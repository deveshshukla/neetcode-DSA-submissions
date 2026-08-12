class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    check(nums) {
        let dropCount = 0;

        for (let i = 0; i < nums.length; i++) {
            // % modulo operator used for wrap arround 'n%n = 0'
            if (nums[i] > nums[(i + 1) % nums.length]) dropCount++;

            // If we find more than 1 drop, it's not sorted & rotated
            if (dropCount > 1) return false;
        }

        return true;
    }
}
