class Solution {
    /**
     * @param {string} text
     * @return {number}
     */
    maxNumberOfBalloons(text) {
        // Solve with frq mapping
        const map = new Map();
        for (let char of text) {
            if ("balon".includes(char)) {
                map.set(char, (map.get(char) || 0) + 1);
            }
        }

        if (map.size < 5) return 0;

        map.set("l", Math.floor(map.get("l") / 2));
        map.set("o", Math.floor(map.get("o") / 2));
        return Math.min(...Array.from(map.values()));
    }
}
