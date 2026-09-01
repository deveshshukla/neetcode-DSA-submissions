class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let set = new Set(nums);

        // add all set elements to nums array
        nums.unshift(...set); 

        return set.size;
    }
}
