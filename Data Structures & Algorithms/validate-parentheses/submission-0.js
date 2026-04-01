class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        // Started with close parentheses
        if (')]}'.includes(s[0])) return false;

        while (s.includes('()') || s.includes('{}') || s.includes('[]')) {
            s = s.replace('()', '');
            s = s.replace('{}', '');
            s = s.replace('[]', '');
        }
        return s === '';
    }
}
