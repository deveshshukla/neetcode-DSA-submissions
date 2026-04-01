class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        // Hash map(element:idx)
        let map = new Map();

        for (let i=0; i<nums.length; i++) {
            // Element exists in map
            if (map.has(nums[i])) {
                let res = i - map.get(nums[i]);
                if (res <= k) return true;
            }
            // Update map
            map.set(nums[i], i);
        }

        return false;
    }
}
