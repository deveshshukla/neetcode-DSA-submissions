class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let count = 1, n = nums.length;

        let majSize = (n/2);
        let majElement = 0;

        for (let i=0; i<n; i++) {
            // Skip already checked num
            if (nums[i] !== null) {
                for (let j=i+1; j<n; j++) {
                    if (nums[j] === nums[i]) {
                        count+=1;
                        nums[j] = null;
                    }
                }
            }
            if (count > majSize) {
                majElement = nums[i];
                break;
            }
        }

        return majElement;
    }
}
