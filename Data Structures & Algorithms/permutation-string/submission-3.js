class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        // Edge case
        if (s1.length > s2.length) return false;

        // sort s1 for comparision: O(n log n)
        let strS1 = s1.split('').sort().join('');

        for (let i=0; i <= s2.length - s1.length; i++) {
            let str = "";
            let cnt = 0;

            while (cnt < s1.length) {
                str += s2[i+cnt];
                cnt++;
            }
            
            // send to check function
            if(check(str)) return true;
        }

        function check(str) {
            let subStr = str.split('').sort().join('');
            if (strS1 === subStr) return true;
            return false;
        }

        // didn't found permutation combination
        return false
    }
}
