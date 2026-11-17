class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        let count = new Map(); // Single Map Usage

        // first insert str s char frq. count
        for (let char of s) {
            count.set(char, (count.get(char) || 0) + 1);
        }

        // now check str t, if char not there return false, 
        // otherwise decrese char frq. count
        for (let char of t) {
            if (!count.get(char)) return false; // char not present, or frq. is 0 (any)
            count.set(char, count.get(char) - 1); // decrese frq. on each lookup
        }

        return true;
    }
}
