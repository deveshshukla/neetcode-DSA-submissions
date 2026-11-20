class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let mp = new Map();

        // Freq. map
        for (let n of nums) mp.set(n, (mp.get(n) || 0) + 1);

        // Sort map based on value : descending
        let sortedMp = [...mp].sort((a, b) => b[1]-a[1]);
        
        // Slice from start to k... key only
        return sortedMp.slice(0, k).map(key => key[0]);
    }
}
