class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();

        // 1. Create frequency map
        for (let n of nums) {
            map.has(n) ? map.set(n, map.get(n) + 1) : map.set(n, 1);
        }

        // 2. Sort the map descending
        const descSorted = [...map].sort((a, b) => b[1] - a[1]);

        // 3. Extract the top K keys
        return descSorted.slice(0, k).map(pair => pair[0]);
    }
}
