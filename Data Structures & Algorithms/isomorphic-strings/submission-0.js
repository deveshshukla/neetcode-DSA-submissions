class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isIsomorphic(s, t) {
        const mapTS = new Map();
        const mapST = new Map();

        for (let i = 0; i < s.length; i++) {
            const c1 = s[i], c2 = t[i];

            if (
                (mapST.has(c1) && mapST.get(c1) !== c2) ||
                (mapTS.has(c2) && mapTS.get(c2) !== c1)
            ) return false;

            mapST.set(c1, c2);
            mapTS.set(c2, c1);
        }

        return true;
    }
}
