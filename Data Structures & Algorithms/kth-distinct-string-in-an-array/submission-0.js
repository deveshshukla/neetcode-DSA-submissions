class Solution {
    /**
     * @param {string[]} arr
     * @param {number} k
     * @return {string}
     */
    kthDistinct(arr, k) {
        let str = [];
        let map = new Map();

        // create frq map
        for (let n of arr) {
            map.set(n, (map.get(n) || 0) + 1);
        }

        for (let [key, val] of map) {
            if (val === 1) str.push(key);
        }

        return str.length >= k ? str[k - 1] : "";
    }
}
