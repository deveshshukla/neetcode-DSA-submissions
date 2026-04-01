class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // Set to store unique 'ID-Strings'
        let set = new Set();

        for (let i=0; i<9; i++) {
            for (let j=0; j<9; j++) {
                let val = board[i][j];

                if (val !== '.') {
                    // Calculate box index:
                    let boxRow = Math.floor(i / 3);
                    let boxCol = Math.floor(j / 3);

                    // Create unique keys for Row, Col, and Box
                    let rowKey = `row:${i}-val:${val}`;
                    let colKey = `col:${j}-val:${val}`;
                    let boxKey = `box:${boxRow}-${boxCol}-val:${val}`;

                    // If we have seen this number in this specific row, col, or box before -> Invalid
                    if (set.has(rowKey) || set.has(colKey) || set.has(boxKey)) {
                        return false;
                    }

                    // Otherwise, add these keys to the Set
                    set.add(rowKey);
                    set.add(colKey);
                    set.add(boxKey);
                }
            }
        }

        return true;
    }
}
