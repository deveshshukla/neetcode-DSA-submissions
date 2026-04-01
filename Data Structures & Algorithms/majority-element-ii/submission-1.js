class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        // Step-1
        let map = new Map();

        for (let num of nums) {
            if(!map.has(num)) {
                map.set(num, 1);
            }else {
                map.set(num, map.get(num)+1);
            }
        }

        // Step-2
        let arr = [];
        let n = nums.length;

        for (const [key, val] of map) {
            if(val > (n/3)) arr.push(key);
        }
        
        return arr;
    }
}
