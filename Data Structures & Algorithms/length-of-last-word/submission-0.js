class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        // trim staring & end spaces, then split in arr, 
        // then trim individual elements.
        const cleanStrArr = s.trim().split(" ").map(item => item.trim());

        let n = cleanStrArr.length;
        return cleanStrArr[n-1].length;
    }
}
