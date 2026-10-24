class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        // Edge case
        if (s1.length > s2.length) return false;

        // Array with size of 26 aplha char length
        let s1Count = new Array(26).fill(0);
        let s2Count = new Array(26).fill(0);

        // Fill the count arr with s1 length
        for (let i=0; i<s1.length; i++) {
            // a: 97
            s1Count[s1.charCodeAt(i) - 97]++; // here ++ incrs val from 0 to 1
            s2Count[s2.charCodeAt(i) - 97]++;
        }

        // Helper function to check if frequencies match
        const matches = (arr1, arr2) => {
            for (let i = 0; i < 26; i++) {
                if (arr1[i] !== arr2[i]) return false;
            }
            return true;
        };

        // 2. Slide the window across s2
        // 'i' represents the right edge of the sliding window
        for (let i = s1.length; i < s2.length; i++) {
            if (matches(s1Count, s2Count)) return true;

            // Add the new character entering the window (Right)
            s2Count[s2.charCodeAt(i) - 97]++;

            // Remove the old character leaving the window (Left)
            let leftCharIdx = s2.charCodeAt(i - s1.length) - 97;
            s2Count[leftCharIdx]--;
        }

        // 3. Check the very last window position
        return matches(s1Count, s2Count);
    }
}
