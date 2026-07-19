class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let max1s = 0;
        let cnt = 0;

        for(let n of nums) {
            if (n === 1){
                cnt++;
            }else {
                max1s = Math.max(max1s, cnt);
                cnt = 0; // reset
            }
        }
        max1s = Math.max(max1s, cnt); // Final Check
        return max1s;
    }
}
