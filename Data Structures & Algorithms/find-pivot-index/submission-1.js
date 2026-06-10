class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {
        let lft = 0; 
        let rht = nums.slice(1).reduce((a, b) => a + b, 0);

        for (let i=0; i<nums.length; i++) {
            if (lft === rht) {
                return i;
            }else {
                lft += nums[i];
                rht -= nums[i+1];
            }
        }

        return -1;
    }
}
