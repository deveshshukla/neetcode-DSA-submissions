class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        let p = nums.length-(k % nums.length);
        nums.splice(k, 0, ...nums.splice(0, p));
    }
}
