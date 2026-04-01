class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let longSubstr = 0, count = 0;
        let st = 0, en = 0;
        let set = new Set();

        while (en < s.length) {
            if (!set.has(s[en])) {
                set.add(s[en]);
                count += 1;
                en++;
            }else {
                //Reset everything
                set.clear();
                count = 0;
                st++; //Increase starting idx
                en = st;
            }

            longSubstr = Math.max(longSubstr, count);
        }
        return longSubstr;
    }
}
