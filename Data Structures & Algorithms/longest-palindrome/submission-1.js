class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    longestPalindrome(s) {
        // To make a palindrome string we need even number of char
        // with single odd char for that we use Map DS to store frq.
        let map = new Map();
        let pali = 0;
        let isOdd = false;

        for (let i of s) map.set(i, (map.get(i) || 0) + 1);

        // Even frq. char are sure shot palindrome
        for (let [k, v] of map) {
            if (v % 2 === 0) pali += v;
            if (v % 2 !== 0) {
                isOdd = true;
                if (v > 1) pali += v - 1;
            }
        }

        return isOdd === true ? pali + 1 : pali;
    }
}
