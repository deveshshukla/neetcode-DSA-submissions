class Solution {
    /**
     * @param {string[]} words
     * @return {string[]}
     */
    stringMatching(words) {
        let subStrArr = [];

        for (let i=0; i<words.length; i++) {
            for (let j=0; j<words.length; j++) {
                if (i !== j && words[i].length < words[j].length) {
                    let mainStr = words[j];
                    let subStr = words[i];
                    if (mainStr.includes(subStr)) {
                        subStrArr.push(subStr);
                        break; // to check only one time
                    }
                }
            }
        }

        return subStrArr;
    }
}
