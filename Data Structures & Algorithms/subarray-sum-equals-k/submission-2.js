class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let count = 0, sum = 0;

        // Step-1: create a prefixSumArr
        for (let i=0; i<nums.length; i++) {
            sum += nums[i];
            nums[i] = sum;
        }

        // Step-2: create HasMap to track freq.
        let map = new Map();

        // Magical part of map O(1) lookup
        for (let i=0; i<nums.length; i++) {
            if (nums[i] === k) count+=1;

            let diff = nums[i]-k;
            
            // Check if diff exists then update count with freq.
            if (map.has(diff)) count += map.get(diff);

            if (!map.has(nums[i])) {
                map.set(nums[i], 1);
            }else 
                map.set(nums[i], map.get(nums[i])+1); //Update freq. count
        }
        return count;
    }
}
