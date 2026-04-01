class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let singleStr = '';
        for(let str of strs) {
            singleStr += `${str.length}#${str}`;
        }

        return singleStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let strs = [];

        for (let i = 0; i < str.length; i++) {
            // 1. Instead of reading one char, we need to find where the '#' is
            let tempNum = "";
            let j = i;

            // Keep reading digits until we hit '#'
            while (str[j] !== '#' && j < str.length) {
                tempNum += str[j];
                j++;
            }

            // 2. Convert the accumulated string to a number
            let length = Number(tempNum);

            // 3. Check if valid number AND we stopped at a '#'
            if (!Number.isNaN(length) && str[j] === '#') {
                let word = '';
                
                // Start extracting AFTER the '#' (which is at index j)
                let start = j + 1;
                let end = start + length;

                for (let k = start; k < end; k++) {
                    word += str[k];
                }

                strs.push(word);

                // 4. Update 'i' to jump over the number, the #, and the word
                i = end - 1; 
            }
        }

        return strs;
    }
}
