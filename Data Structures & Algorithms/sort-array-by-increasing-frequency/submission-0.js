class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    frequencySort(nums) {
        // Map for frq. cnt
        let map = new Map();
        for (let n of nums) map.set(n, (map.get(n) || 0) + 1);

        // Custom Comparator : Sort by condition
        nums.sort((a, b) => {
            let freqA = map.get(a);
            let freqB = map.get(b);

            // Condition 1: If frequencies are different, sort by frequency ascending
            if (freqA !== freqB) return freqA - freqB;

            // Condition 2: If frequencies are tied, sort by numerical value descending
            return b - a;
        });

        return nums;
    }
}
