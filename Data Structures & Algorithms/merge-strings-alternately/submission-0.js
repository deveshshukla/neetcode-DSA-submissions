class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let mrgWrd = '';
        let len = word1.length > word2.length? word1.length : word2.length;

        for (let i=0; i<len; i++) {
            if (word1[i] === undefined) {
                mrgWrd += word2[i];
            } else if (word2[i] === undefined) {
                mrgWrd += word1[i];
            } else
                mrgWrd += word1[i] + word2[i];
        }
        return mrgWrd;
    }
}
