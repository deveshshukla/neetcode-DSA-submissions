class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let frqMap = new Map();
        let lft = 0, maxCnt = 0, res = 0;

        for (let rgt = 0; rgt < s.length; rgt++) {
            // 1. Char frq. count map
            frqMap.set(s[rgt], (frqMap.get(s[rgt]) || 0) + 1);

            // 2. Track highest frequency seen so far
            maxCnt = Math.max(maxCnt, frqMap.get(s[rgt]));

            // 3. Shrink window if operations needed exceed k
            if ((rgt - lft + 1) - maxCnt > k) {
                frqMap.set(s[lft], frqMap.get(s[lft]) - 1);
                lft++;
            }

            // 4. Update the result with maximum valid window size
            res = Math.max(res, rgt - lft + 1);
        }
        return res;
    }
}
