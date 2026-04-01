class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        let isSmallPos = false;
        let count = 1;

        while(!isSmallPos) {
            let check = nums.includes(count);

            if(!check) return count;
            count+=1;
        }
    }
}
