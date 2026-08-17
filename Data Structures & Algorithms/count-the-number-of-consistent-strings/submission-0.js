class Solution {
    /**
     * @param {string} allowed
     * @param {string[]} words
     * @return {number}
     */
    countConsistentStrings(allowed, words) {
        // Step-1
        let allowedArr = new Array(26).fill(0);

        for (let char of allowed) {
            let idx = char.charCodeAt(0) - 97;
            allowedArr[idx] = 1;
        }

        // Step-2
        let res = words.length;
        for (let w of words) {
            for (let char of w) {
                if (!allowedArr[char.charCodeAt(0) - 97]) {
                    res--;
                    break;
                }
            }
        }

        return res;
    }
}
