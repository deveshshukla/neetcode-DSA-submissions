class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let ansArr = [];

        for (let i=k-1, j=0; i<nums.length; i++, j++) {
            // move j till i
            let max = -Infinity;
            let slide = j;
            while (slide <= i) {
                max = Math.max(max, nums[slide]); // get max num
                slide++;
            }
            ansArr.push(max); // add max num
        }
        return ansArr;
    }
}
