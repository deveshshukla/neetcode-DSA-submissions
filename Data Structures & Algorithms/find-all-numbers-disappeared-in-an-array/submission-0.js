class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findDisappearedNumbers(nums) {
        let n = nums.length;
        let missArr = [];
        let set = new Set(nums);

        for (let i = 1; i <= n; i++) {
            if (!set.has(i)) missArr.push(i);
        }
        return missArr;
    }
}
