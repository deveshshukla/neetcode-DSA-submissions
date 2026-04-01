class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        let pS=0, pE=s.length-1;
        while (pS < pE) {
            [s[pS], s[pE]] = [s[pE], s[pS]];
            pS++, pE--;
        }

        return s;
    }
}
