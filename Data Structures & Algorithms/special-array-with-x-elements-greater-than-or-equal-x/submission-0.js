class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    specialArray(nums) {
        // So it depends on length of an arr nums
        // If nums len = 2 and there are 2 elements in nums which are >= 2 then it's special

        let n = nums.length;

        for (let i = n; i >= 0; i--) {
            let count = 0;
            for (let j = 0; j < n; j++) {
                if (nums[j] >= i) count++;
            }

            // If element count is >= i we found special num
            if (count === i) return i;
        }
        return -1; // no special
    }
}
