class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    numIdenticalPairs(nums) {
        let goodPair = 0;

        for (let p1 = 0; p1 < nums.length - 1; p1++) {
            let p2 = p1 + 1;

            while (p2 < nums.length) {
                if (nums[p1] === nums[p2]) goodPair++;
                p2++;
            }
        }
        return goodPair;
    }
}
