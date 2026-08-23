class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxScore(s) {
        let lftScr = 0,
            rhtScr = 0;
        let max = 0;

        for (let i = 0; i < s.length-1; i++) {
            if (s[i] === "0") lftScr++;

            for (let j = i + 1; j < s.length; j++) {
                if (s[j] === "1") rhtScr++;
            }
            max = Math.max(max, lftScr + rhtScr); // update max val
            rhtScr = 0; // reset right cnt.
        }

        return max;
    }
}
