class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix = [];
        let postfix = [];
        let res = [];

        // Prefix
        let prv = 1;
        for (let i=0; i<nums.length; i++) {
            prv *= nums[i];
            prefix[i] = prv;
        }

        // Postfix
        prv = 1;
        for (let i=nums.length-1; i>=0; i--) {
            prv *= nums[i];
            postfix[i] = prv;
        }

        // Result
        for (let i=0; i<nums.length; i++) {
            let pre = prefix[i-1];
            let pos = postfix[i+1];
            if (pre === undefined) pre = 1;
            if (pos === undefined) pos = 1;

            res[i] = pre*pos;
        }

        return res;
    }
}
