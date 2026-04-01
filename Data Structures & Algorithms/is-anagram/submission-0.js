class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // 1st check - length
        if (s.length !== t.length) return false;

        let arrS = [...s].sort().join('');
        let arrT = [...t].sort().join('');

        for (let i=0; i<t.length; i++) {
            if (arrT[i] !== arrS[i]) return false;
        }

        return true;
    }
}
