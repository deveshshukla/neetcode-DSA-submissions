class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums);
        let longSeq = 0;

        // Look in set to get rid of duplicate val.
        for (const num of set) {
            // if num is start of seq. then proceed, otherwise skip it.
            if (!set.has(num-1)) {
                let seq = 1; // starting seq.
                while (set.has(num+seq)) seq+=1; // Check & update seq.

                // Update longSeq
                longSeq = Math.max(longSeq, seq);
            }
        }
        return longSeq;
    }
}
