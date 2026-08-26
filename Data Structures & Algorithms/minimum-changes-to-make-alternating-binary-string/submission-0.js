class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    minOperations(s) {
        // build same len. alternating str
        // and compare it with given 's'

        let str0 = "0"; // String starts with '0'
        let str1 = "1"; // String starts with '1'

        let zero = "0";
        let one = "1";

        for (let i = 1; i < s.length; i++) {
            // Zero
            if (str0[i - 1] === "0") {
                str0 += one;
            } else str0 += zero;

            // One
            if (str1[i - 1] === "1") {
                str1 += zero;
            } else str1 += one;
        }

        // Compare with str0
        let ops0 = 0;
        for (let j = 0; j < s.length; j++) {
            if (s[j] !== str0[j]) ops0++;
        }

        // Compare with str1
        let ops1 = 0;
        for (let j = 0; j < s.length; j++) {
            if (s[j] !== str1[j]) ops1++;
        }

        return Math.min(ops0, ops1);
    }
}
