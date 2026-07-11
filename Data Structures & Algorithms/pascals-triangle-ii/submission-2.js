class Solution {
    /**
     * @param {number} rowIndex
     * @return {number[]}
     */
    getRow(rowIndex) {
        const row = [1];
        for (let i = 1; i <= rowIndex; i++) {
            row.push(
                Math.floor((row[row.length - 1] * (rowIndex - i + 1)) / i),
            );
        }
        return row;
    }
}
