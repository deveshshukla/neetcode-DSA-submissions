class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let count = 0, pS=0, pE=nums.length-1;

        nums.forEach(element => {
            if (element !== val) count +=1;
        });

        while (pS<pE) {
            if (nums[pS] === val && nums[pE] !== val) {
                nums[pS] = nums[pE];
                nums[pE] = '_';
                pS++, pE--;

            }else if (nums[pS] !== val && nums[pE] !== val) {
                pS++;
            }else if (nums[pS] !== val) {
                pS++;
            }else if (nums[pE] === val) {
                nums[pE] = '_';
                pE--;
            }
        }

        return count;
    }
}
