class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        let p1 = 0, p2 = s.length - 1;

        while (p1 < p2) {
            if (s[p1] !== s[p2]) {
                // Try skipping the left char OR skipping the right char
                return isPalindrome(s, p1 + 1, p2) || isPalindrome(s, p1, p2 - 1);
            }
            p1++;
            p2--;
        }
        return true;
    }
}

// Helper function to check a specific range
function isPalindrome(s, start, end) {
    while (start < end) {
        if (s[start] !== s[end]) return false;
        start++;
        end--;
    }
    return true;
}
