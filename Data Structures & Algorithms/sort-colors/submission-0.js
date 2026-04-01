class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let low = 0, mid = 0, hi = nums.length-1;

        while(mid <= hi) {
            if (nums[mid] === 0) {
                //Swap low & mid
                [nums[low], nums[mid]] = [nums[mid], nums[low]];
                low++, mid++;

            }else if (nums[mid] === 2) {
                //Swap high & mid
                [nums[hi], nums[mid]] = [nums[mid], nums[hi]];
                hi--;
                
            }else
                mid++;
        }
    }
}
