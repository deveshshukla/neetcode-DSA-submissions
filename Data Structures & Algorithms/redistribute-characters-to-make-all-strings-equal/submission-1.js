class Solution {
    /**
     * @param {string[]} words
     * @return {boolean}
     */
    makeEqual(words) {
        // We use Freq. data
        // Each char freq == array length
        let n = words.length;
        let map = new Map();

        for (let i of words) {
            for (let j of i) {
                map.set(j, (map.get(j) || 0) + 1);
            }
        }

        for (let [k, v] of map) 
            if (v % n !== 0) return false;

        return true;
    }
}
