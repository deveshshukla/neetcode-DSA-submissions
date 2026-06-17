class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    minOperations(nums) {
        let map = new Map();
        let minOps = 0;

        // map for frq.
        for (let num of nums) {
            map.set(num, (map.get(num) || 0)+1);
        }
        
        // check pairs
        for (let count of map.values()) {
            if (count === 1) return -1;
            
            // Math.ceil to get upper value
            minOps += Math.ceil(count/3);
        }
        return minOps;
    }
}
