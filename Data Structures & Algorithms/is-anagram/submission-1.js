class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        // Freq. map
        let mapS = new Map();
        let mapT = new Map();

        // map frq. of each char
        for (let i=0; i<s.length; i++) {
            // mapS
            if (mapS.has(s[i])) {
                mapS.set(s[i], mapS.get(s[i])+1); // Incrs freq.
            }else
                mapS.set(s[i], 1); // initial freq. is 1

            // mapT
            if (mapT.has(t[i])) {
                mapT.set(t[i], mapT.get(t[i])+1); // Incrs freq.
            }else
                mapT.set(t[i], 1); // initial freq. is 1
        }

        // check frq. matching
        for (let char of s) {
            if (mapS.get(char) !== mapT.get(char)) return false;
        }

        return true;
    }
}
