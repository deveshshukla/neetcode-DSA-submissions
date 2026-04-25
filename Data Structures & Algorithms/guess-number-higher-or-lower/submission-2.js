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
        let l = 1, r = n;

    while(true) {
        let mid = Math.floor((l+r)/2);
        let guessNum = guess(mid);

        // send guess
        if (guessNum === 0) return mid;

        if (guessNum === 1) {
            l = mid+1;
        }else
            r = mid-1;
        }
    }
}
