class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxLengthBetweenEqualCharacters(s) {
        // Check char frq. through Map DS
        let map = new Map();
        let res = -1;

        for (let i = 0; i < s.length; i++) {
            if (map.has(s[i])) {
                res = Math.max(res, i - map.get(s[i]) - 1);
            } else map.set(s[i], i);
        }
        return res;
    }
}
