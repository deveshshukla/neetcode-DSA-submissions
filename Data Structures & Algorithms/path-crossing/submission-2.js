class Solution {
    /**
     * @param {string} path
     * @return {boolean}
     */
    isPathCrossing(path) {
        // Coordinate (x, y): N (0, 1) | S (0, -1) | E (1, 0) | W (-1, 0)
        let set = new Set(); // To lookup visited path
        let x = 0,
            y = 0;
        set.add(`${x}, ${y}`); // Starting coordinates

        for (let p of path) {
            if (p === "N") y++;
            else if (p === "S") y--;
            else if (p === "E") x++;
            else if (p === "W") x--;

            let pos = `${x}, ${y}`;
            if (set.has(pos)) return true;
            set.add(pos);
        }
        return false;
    }
}
