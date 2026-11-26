class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix = [];
        let postfix = [];
        let res = [];
        let n = nums.length;

        // Prefix Array
        let prvPrefix = 1;
        let prvPostfix = 1;

        for (let i=0, j=n-1; i<n; i++, j--) {
            prvPrefix *= nums[i];
            prvPostfix *= nums[j];

            prefix[i] = prvPrefix;
            postfix[j] = prvPostfix;
        }
        
        // Result
        for (let i=0; i<n; i++) {
            let pre = prefix[i-1];
            let pos = postfix[i+1];
            if (pre === undefined) pre = 1;
            if (pos === undefined) pos = 1;

            res[i] = pre*pos;
        }

        return res;
    }
}
