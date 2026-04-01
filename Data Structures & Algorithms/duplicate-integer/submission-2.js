class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let set = new Set();

        for (let i of nums) {
            if(!set.has(i)) {
                set.add(i);
            }else
                return true;
        }

        return false;
    }
}
