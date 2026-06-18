class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        let i=0, j=0;

        while(i < t.length && j < t.length) {
            if (s[i] === t[j]) i++;
            j++;
        }
        // if we get all s str char in t, 
        // then i length will be equal to s
        return i === s.length;
    }
}
