class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        // Encoded str pattern eg: "3@str"
        let encodedStr = "";

        for (let i=0; i<strs.length; i++) {
            encodedStr += `${strs[i].length}@${strs[i]}`;
        }
        
        return encodedStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let decodedStr = [];
        let i=0;

        while (i < str.length) {
            let j=i;

            // 1. Move j forward until hit '@' to capture multi-digit lengths (e.g., "12")
            while (str[j] !== '@') j++;

            // 2. Extract str length
            const len = Number(str.slice(i, j));

            // 3. Slice og word
            const word = str.slice(j + 1, j + 1 + len);
            decodedStr.push(word);

            // 4. Jump i directly to the start of the next length prefix
            i = j + 1 + len;
        }

        return decodedStr;
    }
}
