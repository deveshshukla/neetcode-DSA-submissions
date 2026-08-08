class Solution {
    /**
     * @param {string} pattern
     * @param {string} s
     * @return {boolean}
     */
    wordPattern(pattern, s) {
        let str = s.split(" ");
        let setS = new Set(str);
        let setP = new Set(pattern);

        if (pattern.length !== str.length) return false;

        return setS.size === setP.size;
    }
}
