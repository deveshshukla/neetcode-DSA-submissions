class Solution {
    /**
     * @param {number[][]} grid
     * @return {number[]}
     */
    findMissingAndRepeatedValues(grid) {
        // a - appear twice, b - missing => [a, b]
        let n = grid[0].length;
        let flatArr = grid.flat();

        // HashMap
        let map = new Map();
        for (let a of flatArr) {
            map.set(a, (map.get(a) || 0) + 1);
        }

        // get repeating and & missing num
        let a = 0,
            b = 0;
        for (let i = 1; i <= n ** 2; i++) {
            let check = map.get(i);
            if (check === 2) a = i;
            if (check === undefined) b = i;
        }

        return [a, b];
    }
}
