class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    heightChecker(heights) {
        // Inbuilt Sorting O(n log n)
        let ogArr = [...heights];
        let expected = heights.sort((a, b) => a - b);

        let diff = 0;

        for (let i = 0; i < heights.length; i++) {
            if (ogArr[i] !== expected[i]) diff++;
        }
        return diff;
    }
}
