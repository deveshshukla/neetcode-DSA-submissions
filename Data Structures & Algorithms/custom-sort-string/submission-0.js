class Solution {
    /**
     * @param {string} order
     * @param {string} s
     * @return {string}
     */
    customSortString(order, s) {
        // Use map ds for 's' for const. lookup
        let map = new Map();
        for (let i of s) map.set(i, (map.get(i) || 0) + 1);

        // Construct 'res' str
        let res = "";

        for (let ch of order) {
            if (map.get(ch)) {
                let idx = map.get(ch); // get frq of that char in 's'
                for (let i = 0; i < idx; i++) {
                    res += ch; // append that char in res str
                    map.set(ch, map.get(ch) - 1); // reduce frq. cnt of used chars
                }
            }
        }

        // append remaing char of 's' in res
        for (let [key, val] of map) {
            if (val > 0) {
                let idx = val;
                for (let i = 0; i < idx; i++) res += key;
            }
        }

        return res;
    }
}
