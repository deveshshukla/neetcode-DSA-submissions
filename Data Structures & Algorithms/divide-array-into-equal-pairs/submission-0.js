class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    divideArray(nums) {
        // len is 2*n so it will always be even in len.
        // Equal pair is possible only if the element count is even.
        let map = new Map();

        for (let n of nums) map.set(n, (map.get(n) || 0) + 1);

        for (let [key, val] of map) if (val % 2 !== 0) return false;

        return true; // defualt
    }
}
