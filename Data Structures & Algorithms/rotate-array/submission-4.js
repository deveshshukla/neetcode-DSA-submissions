class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        let n = nums.length;
    
        // Normalize 'k' in case of 'k > nums.length'
        k %= n;

        // Edge case
        if (k===0) return nums;

        // 1st : Reverse (0, n-1)
        for (let i=0, j=n-1; i<j; i++, j--) {
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
        }
        
        // 2nd : Reverse (0, k-1)
        for (let i=0, j=k-1; i<j; i++, j--) {
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
        }

        // 3rd : Reverse (k, n-1)
        for (let i=k, j=n-1; i<j; i++, j--) {
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
        }
        return nums;
    }
}
