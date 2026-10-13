class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 1, right = Math.max(...piles);
        let result = right;

        while(left <= right) {
            let k = Math.floor((left+right)/2);

            let totTime = 0;
            for (let p of piles) totTime += Math.ceil(p/k);

            if (totTime <= h) {
                result = k;
                right = k-1;
            }else 
                left = k+1;
        }

        return result;
    }
}
