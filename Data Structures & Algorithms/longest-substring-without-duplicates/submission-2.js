class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let longSubstr = 0;
        let st = 0;
        let set = new Set();

        for (let en = 0; en < s.length; en++) {
            // If we find a duplicate, shrink the window from the left
            while (set.has(s[en])) {
                set.delete(s[st]);
                st++;
            }
            
            set.add(s[en]);
            // The window size is always (en - st + 1)
            longSubstr = Math.max(longSubstr, en - st + 1);
        }
        
        return longSubstr;
    }
}
