class Solution {
    /**
     * @param {string} ransomNote
     * @param {string} magazine
     * @return {boolean}
     */
    canConstruct(ransomNote, magazine) {
        // Use Map to count frq. and compare
        let map = new Map();

        // Char Freq. count for ransomNote
        for (let m of magazine) map.set(m, (map.get(m) || 0) + 1);

        // Decrement freq. form map
        for (let i = 0; i < ransomNote.length; i++) {
            let check = map.get(ransomNote[i]);
            if (check === undefined) return false;
            if (check <= 0) return false;

            // decrement frq. count
            map.set(ransomNote[i], map.get(ransomNote[i]) - 1);
        }

        return true;
    }
}
