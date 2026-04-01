class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // make s lowercase
        let str = s.toLowerCase();
        let wrd = '';

        // select only valid char
        for (let i of str) {
            if (/[a-z0-9]/.test(i)) wrd += i;
        }

        // check planidrome using 2-pointer
        for (let i=0, j=wrd.length-1; i<j; i++, j--) {
            if (wrd[i] !== wrd[j]) return false;
        }

        return true;
    }
}
