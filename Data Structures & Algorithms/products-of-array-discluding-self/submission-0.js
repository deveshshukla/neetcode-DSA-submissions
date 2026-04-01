class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let answer = [];
        // brute forec: O(n^2)
        for (let i=0; i<nums.length; i++) {
            let mul = 1;
            for (let j=0; j<nums.length; j++) {
                if (j !== i) mul *= nums[j];
            }
            answer[i] = mul;
        }

        return answer;
    }
}
