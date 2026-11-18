class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    minChanges(s) {
        let changes = 0;
        let cnt = 0;

        for (let i=0; i<s.length; i++) {
            cnt++;
            if (cnt%2 === 0 && s[i] !== s[i-1]) {
                changes++;
                cnt = 0; // Reset cnt
            }
        }
        return changes;
    }
}
