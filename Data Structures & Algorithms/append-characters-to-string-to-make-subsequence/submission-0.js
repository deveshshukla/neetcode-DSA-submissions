class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    appendCharacters(s, t) {
        let tLen = t.length;

        for (let i=0, j=0; i<s.length; i++) {
            if (s[i] === t[j]) {
                tLen--;
                j++;
            }
        }

        return tLen;
    }
}
