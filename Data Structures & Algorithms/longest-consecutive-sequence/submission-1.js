class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // set ds for constent lookup
        let set = new Set(nums);
        let maxSeq = 0;

        for (let num of nums) {
            if (!set.has(num-1)) {
                let seq = 1;
                
                while (set.has(num+seq)) seq+=1;

                maxSeq = Math.max(maxSeq, seq);
            }
        }

        return maxSeq;
    }
}
