class Solution {
    /**
     * @param {string[]} words
     * @param {number[][]} queries
     * @return {number[]}
     */
    vowelStrings(words, queries) {
        // We can check in adv. which str in words have start and end vowel
        // Cal. early just use that to ans. queries
        // We use extra arr with starting element is 0 (prefix calc.)
        let arr = new Array(words.length + 1);
        arr[0] = 0;

        const VOWELS = new Set(["a", "e", "i", "o", "u"]);

        // Check for vowels
        for (let i = 0; i < words.length; i++) {
            let firstChar = words[i][0];
            let lastChar = words[i][words[i].length - 1];

            if (VOWELS.has(firstChar) && VOWELS.has(lastChar)) {
                arr[i + 1] = arr[i] + 1; // add 1 with prv. element
            } else arr[i + 1] = arr[i] + 0; // add 0 with prv. element
        }

        // Work with queries
        const res = new Array(queries.length);

        for (let i = 0; i < queries.length; i++) {
            const [l, r] = queries[i];
            res[i] = arr[r + 1] - arr[l];
        }

        return res;
    }
}
