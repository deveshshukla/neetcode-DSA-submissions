class Solution {
    /**
     * @param {string[]} words
     * @return {string[]}
     */
    commonChars(words) {
        // 1. Initialize frequency count for the first word
        let map1 = new Map();
        for (let i of words[0]) map1.set(i, (map1.get(i) || 0) + 1);

        // 2. Intersect with the rest of the words
        for (let i = 1; i < words.length; i++) {
            let map2 = new Map();
            for (let k of words[i]) map2.set(k, (map2.get(k) || 0) + 1);

            // Update map1 to keep only the minimum frequencies
            for (let [key, val] of map1) {
                if (map2.has(key)) {
                    // Keep the minimum count found in both words
                    map1.set(key, Math.min(val, map2.get(key)));
                } else {
                    // If it's missing in the current word, it's not common anymore
                    map1.set(key, 0);
                }
            }
        }

        // 3. Construct the result array from final frequencies
        let res = [];
        for (let [key, val] of map1) {
            // Push the character 'val' number of times
            for (let count = 0; count < val; count++) {
                res.push(key);
            }
        }

        return res;
    }
}
