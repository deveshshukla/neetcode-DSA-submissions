class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map(); // for const. lookup

        for (let i=0; i<nums.length; i++) {
            map.set(nums[i], i); // [element, idx]
        }
        
        for (let i=0; i<nums.length; i++) {
            let req = target-nums[i];
            if (map.has(req) && i !== map.get(req)) 
                return [i, map.get(req)];
        }
    }
}
