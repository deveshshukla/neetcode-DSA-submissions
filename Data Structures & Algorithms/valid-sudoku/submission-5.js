class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let set = new Set();

        for (let i=0; i<9; i++) {
            for (let j=0; j<9; j++) {
                if (board[i][j] !== '.') {
                    // Calc sudoku-box
                    let bRow = Math.floor(i/3);
                    let bCol = Math.floor(j/3);

                    // String for set record
                    let row = `row:${i}-val:${board[i][j]}`; // row info
                    let col = `col:${j}-val:${board[i][j]}`; // col info
                    let box = `box:${bRow}-${bCol}-val:${board[i][j]}`; // which box

                    if (set.has(row) || set.has(col) || 
                            set.has(box)) return false;

                    // Otherwise, add these keys to the Set
                    set.add(row);
                    set.add(col);
                    set.add(box);
                }
            }
        }
        return true;
    }
}
