class Solution {
    /**
     * @param {number} numRows
     * @return {number[][]}
     */
    generate(numRows) {
        let finalArr = new Array(numRows);

        for (let i=0; i<numRows; i++) {
            // Pre calc array size avoid dynamic resizing memory overhead
            const row = new Array(i + 1); // incr by 1 everytime

            // fill edge's in adv.
            row[0] = 1;
            row[i] = 1;

            // Only calculate inner elements (stops loop from running on edges)
            for (let j = 1; j < i; j++) {
                row[j] = finalArr[i - 1][j - 1] + finalArr[i - 1][j];
            }

            finalArr[i] = row;
        }
        return finalArr;
    }
}
