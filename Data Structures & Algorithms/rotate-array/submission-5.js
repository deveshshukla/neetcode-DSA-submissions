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

        // Rotate Function
        function rotate(s, e) {
            for (let i=s, j=e; i<j; i++, j--) {
                let temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }
        }

        // 1st : Complete Reverse (0, n-1)
        rotate(0, n-1);
        
        // 2nd : Reverse (0, k-1)
        rotate(0, k-1);

        // 3rd : Reverse (k, n-1)
        rotate(k, n-1);
        
        return nums;
    }
}
