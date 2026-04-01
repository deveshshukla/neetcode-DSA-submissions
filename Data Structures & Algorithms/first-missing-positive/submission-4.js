class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        let set = new Set(nums);
        let count = 1;

        while(true) {
            let check = set.has(count);

            if(!check) return count;
            count+=1;
        }
    }
}
