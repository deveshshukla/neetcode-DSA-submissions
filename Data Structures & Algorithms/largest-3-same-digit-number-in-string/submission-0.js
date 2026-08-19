class Solution {
    /**
     * @param {string} num
     * @return {string}
     */
    largestGoodInteger(num) {
        // Three pointer : 3 <= num.length <= 1000
        let a = 0,
            b = 1,
            c = 2;
        let goodDig = "";

        for (; c < num.length; a++, b++, c++) {
            if (num[a] === num[b] && num[a] === num[c]) {
                if (goodDig === "" || goodDig[0] < num[a]) {
                    goodDig = num.slice(a, c + 1);
                }
            }
        }
        return goodDig;
    }
}
