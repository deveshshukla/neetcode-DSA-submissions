class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestMonotonicSubarray(nums) {
        // Edge case
        if (nums.length === 1) return 1;
        
        let strictIncr = 1;
        let strictDecr = 1;
        let longIncr = 0;
        let longDecr = 0;

        for (let i=1; i<nums.length; i++) {
            if (nums[i] > nums[i-1]) {
                strictIncr+=1;
                strictDecr = 1; // reset decr
            }else if (nums[i] < nums[i-1]) {
                strictDecr+=1;
                strictIncr = 1; // reset incr
            }else { 
                // Both reset on equal num
                strictIncr = 1;
                strictDecr = 1;
            }
            // Update longest cnt
            longIncr = Math.max(longIncr, strictIncr);
            longDecr = Math.max(longDecr, strictDecr);
        }

        return Math.max(longIncr, longDecr);
    }
}
