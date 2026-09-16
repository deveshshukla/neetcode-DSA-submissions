class Solution {
    /**
     * @param {string[]} names
     * @param {number[]} heights
     * @return {string[]}
     */
    sortPeople(names, heights) {
        // Shallow Copy of heights arr
        let arrHi = [...heights];
        arrHi.sort((a, b) => b - a); // Sort in descending order

        let resArr = [];

        for (let i = 0; i < arrHi.length; i++) {
            // Find the index
            let idx = heights.indexOf(arrHi[i]);
            resArr.push(names[idx]);
        }
        return resArr;
    }
}
