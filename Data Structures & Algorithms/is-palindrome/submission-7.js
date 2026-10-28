class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // clean the string
        const clnStr = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

        // Edge case: empty string
        if (clnStr === "") return true;
        
        // 2 pointer method
        for (let i=0, j=clnStr.length-1; i<j; i++, j--) {
            if (clnStr[i] !== clnStr[j]) return false;
        }

        return true;
    }
}
