class Solution {
    /**
     * @param {number[]} flowerbed
     * @param {number} n
     * @return {boolean}
     */
    canPlaceFlowers(flowerbed, n) {
        // Edge case
        if (n === 0) return true;

        for (let i=0; i<flowerbed.length; i++) {
            if (flowerbed[i] === 0 && n > 0) {
                if (flowerbed[i-1] !== 1 && flowerbed[i+1] !== 1) {
                    n-=1;
                    flowerbed[i] = 1; // update flowerbed
                }
            }
        }

        return n<=0;
    }
}
