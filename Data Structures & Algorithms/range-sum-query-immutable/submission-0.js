class NumArray {
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        this.nums = nums;
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left, right) {
        let res = 0;

        for (let i = left; i <= right; i++) {
            res += this.nums[i];
        }
        return res;
    }
}
