class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxDifference(s) {
        // Get the frq of char
        let map = new Map();
        for (let i=0; i<s.length; i++) {
            map.set(s[i], (map.get(s[i]) || 0)+1);
        }
        
        // Get the max diff
        let a1 = 0; // odd frq
        let a2 = Number.MAX_SAFE_INTEGER; // even frq

        for (let [key, val] of map) {
            if (val%2 === 0) { // Even
                a2 = Math.min(a2, val);
            }else { // odd
                a1 = Math.max(a1, val);
            }
        }
        return (a1-a2);
    }
}
