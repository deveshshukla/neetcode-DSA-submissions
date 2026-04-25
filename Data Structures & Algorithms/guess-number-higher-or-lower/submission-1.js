/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n) {
        let start = 1, end = n;

        while(true) {
            let mid = Math.floor((start+end)/2);
            let guessNum = guess(mid);

            // send guess
            if (guessNum === 0) return mid;

            if (guessNum === 1) {
                start = mid+1;
            }else
                end = mid-1;
        }
    }
}
