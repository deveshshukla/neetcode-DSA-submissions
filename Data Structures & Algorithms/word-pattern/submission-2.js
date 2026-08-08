class Solution {
    /**
     * @param {string} pattern
     * @param {string} s
     * @return {boolean}
     */
    wordPattern(pattern, s) {
        let str = s.split(" ");
        if (pattern.length !== str.length) return false;

        let mapKey = new Map();
        let mapVal = new Map();

        for (let i = 0; i < str.length; i++) {
            // Check for each pattern char
            let checkKey = mapKey.get(pattern[i]) === undefined;
            let checkVal = mapVal.get(str[i]) === undefined;
            if (checkKey && checkVal) {
                mapKey.set(pattern[i], str[i]); // Set [key - val]
                mapVal.set(str[i], pattern[i]); // Set [val - key]
            } else if (!checkKey) {
                if (mapKey.get(pattern[i]) !== str[i]) return false;
            } else return false;
        }

        return true;
    }
}
