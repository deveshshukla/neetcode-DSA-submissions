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
                    // calc box row & col
                    let bRow = Math.floor(i/3);
                    let bCol = Math.floor(j/3);

                    // Create unique string for each row, col & box
                    let strRow = `row:${i}-val:${board[i][j]}`;
                    let strCol = `col:${j}-val:${board[i][j]}`;
                    let strBox = `box:${bRow}-${bCol}-val:${board[i][j]}`;

                    if (set.has(strRow) || set.has(strCol) || 
                        set.has(strBox)) return false;

                    // Otherwise, add these keys to the Set
                    set.add(strRow);
                    set.add(strCol);
                    set.add(strBox);
                }
            }
        }
        return true;
    }
}
