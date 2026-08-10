class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    findLucky(arr) {
        let luckyInt = -1;
        let map = new Map();

        for (let i = 0; i < arr.length; i++) {
            map.set(arr[i], (map.get(arr[i]) || 0) + 1);
        }

        // Get the biggest luckyInt
        for (let [key, val] of map) {
            if (key === val) {
                luckyInt = Math.max(luckyInt, key);
            }
        }

        return luckyInt;
    }
}
