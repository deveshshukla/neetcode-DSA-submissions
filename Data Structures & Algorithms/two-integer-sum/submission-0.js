class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map();

        for (let i=0; i<nums.length; i++) {
            map.set(nums[i], i);
        }

        for (let j=0; j<nums.length; j++) {
            let diff = target - nums[j];

            if(map.has(diff) && map.get(diff) !== j) {
                return [j, map.get(diff)];
            }
        }
    }
}
