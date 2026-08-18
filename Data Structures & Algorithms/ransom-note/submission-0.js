class Solution {
    /**
     * @param {string} ransomNote
     * @param {string} magazine
     * @return {boolean}
     */
    canConstruct(ransomNote, magazine) {
        // Use Map to count frq. and compare
        let mapA = new Map(); // ransomNote
        let mapB = new Map(); // Magazine

        // Char Freq. count for ransomNote
        for (let r of ransomNote) mapA.set(r, (mapA.get(r) || 0) + 1);

        // Char Freq. count for Magazine
        for (let m of magazine) mapB.set(m, (mapB.get(m) || 0) + 1);

        // Comapre both of them
        for (let i = 0; i < ransomNote.length; i++) {
            let rans = mapA.get(ransomNote[i]);
            let mag = mapB.get(ransomNote[i]);
            if (rans > mag || mag === undefined) return false;
        }

        return true;
    }
}
