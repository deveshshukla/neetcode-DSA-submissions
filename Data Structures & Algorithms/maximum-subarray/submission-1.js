class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let maxSum = Number.MIN_SAFE_INTEGER;
        let sum = 0;

        for (let num of nums) {
            sum += num;

            if (sum > maxSum) maxSum = sum;
            if (sum < 0) sum = 0;
        }
        return maxSum;
    }
}
