class Solution {
    /**
     * @param {string[]} words
     * @param {string} chars
     * @return {number}
     */
    countCharacters(words, chars) {
        let len = 0;

        // Step-1: Get frequency map of available characters
        let chMap = new Map();
        for (let c of chars) chMap.set(c, (chMap.get(c) || 0) + 1);

        // Step-2: Loop through each word
        for (let i = 0; i < words.length; i++) {
            let wMap = new Map();
            let isSame = true;

            // Set frequency count of the current word
            for (let w of words[i]) wMap.set(w, (wMap.get(w) || 0) + 1);

            // Compare frequencies
            for (let k = 0; k < words[i].length; k++) {
                let char = words[i][k];
                let countInWord = wMap.get(char);
                let countInChars = chMap.get(char) || 0; // Handle missing characters safely

                if (countInWord > countInChars) {
                    isSame = false;
                    break;
                }
            }

            if (isSame) len += words[i].length;
        }

        return len;
    }
}
