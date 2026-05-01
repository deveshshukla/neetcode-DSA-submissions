class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        let min = Math.max(...weights);
        let max = weights.reduce((a,b) => a+b, 0);
        let capacity = max;

        // Helper function
        function check(mid) {
            let m = mid, takenDays = 0;

            for (let i=0; i<weights.length; i++) {
                
                if (m >= weights[i]) {
                    m -= weights[i];
                }else {
                    takenDays+=1;
                    m = mid; // reset mid val to check again
                    m -= weights[i];
                }
            }
            if (m >= 0) takenDays+=1;
            // console.log(`${mid}: ${takenDays}`);
            return takenDays;
        }

        while (min <= max) {
            let mid = Math.floor(min + (max-min)/2);

            if (check(mid) <= days) { // If all pakage ship under given days
                capacity = Math.min(capacity, mid);
                // console.log(`Capacity: ${capacity}`);
                max = mid-1;
            }else 
                min = mid+1;
        }
        return capacity;
    }
}
