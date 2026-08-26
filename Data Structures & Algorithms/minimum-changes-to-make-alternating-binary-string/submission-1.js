class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    minOperations(s) {
        let ops0 = 0; // Cost to match "010101..."
        let ops1 = 0; // Cost to match "101010..."

        for (let i = 0; i < s.length; i++) {
            // At even indices (0, 2, 4), pattern 0 expects '0', pattern 1 expects '1'
            // At odd indices (1, 3, 5), pattern 0 expects '1', pattern 1 expects '0'
            let expected0 = i % 2 === 0 ? "0" : "1";
            let expected1 = i % 2 === 0 ? "1" : "0";

            if (s[i] !== expected0) ops0++;
            if (s[i] !== expected1) ops1++;
        }

        return Math.min(ops0, ops1);
    }
}
