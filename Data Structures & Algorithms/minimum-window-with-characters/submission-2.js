class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (s.length < t.length) return "";

        // 1. Build the frequency map for string 't'
        let targetMap = new Map();
        for (let char of t) {
            targetMap.set(char, (targetMap.get(char) || 0) + 1);
        }

        // 2. Track window state
        let windowMap = new Map();
        let left = 0;
        let minSubStr = "";
        
        // How many unique characters in 't' need to match their required frequencies
        let requiredMatches = targetMap.size; 
        let formedMatches = 0; 

        // 3. Move the right pointer to expand the window
        for (let right = 0; right < s.length; right++) {
            let rightChar = s[right];
            
            if (targetMap.has(rightChar)) {
                windowMap.set(rightChar, (windowMap.get(rightChar) || 0) + 1);
                
                // If our window matches the target frequency for this character
                if (windowMap.get(rightChar) === targetMap.get(rightChar)) {
                    formedMatches++;
                }
            }

            // 4. Shrink the window from the left if it's currently valid
            while (formedMatches === requiredMatches) {
                let currentWindowSize = right - left + 1;
                
                // Track the smallest window found so far
                if (minSubStr === "" || currentWindowSize < minSubStr.length) {
                    minSubStr = s.slice(left, right + 1);
                }

                let leftChar = s[left];
                if (targetMap.has(leftChar)) {
                    // If removing this character breaks our required frequency match
                    if (windowMap.get(leftChar) === targetMap.get(leftChar)) {
                        formedMatches--;
                    }
                    windowMap.set(leftChar, windowMap.get(leftChar) - 1);
                }
                left++; // Shrink window
            }
        }

        return minSubStr;
    }
}
