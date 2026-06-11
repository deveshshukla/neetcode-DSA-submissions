class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let cntZero = 0;
        let pro = 1;

        // Get product of all non-zeros & cnt zeros in arr
        for (let n of nums) {
            if (n !== 0) {
                pro *= n;
            }else
                cntZero+=1;
        }

        if (cntZero > 1) {
            return Array(nums.length).fill(0);
        }

        const res = new Array(nums.length);
        for (let i = 0; i < nums.length; i++) {
            if (cntZero > 0) {
                res[i] = nums[i] === 0 ? pro : 0;
            } else 
                res[i] = pro / nums[i];
        }
        return res;
    }
}
